package com.trinitstechnologies.payroll.service.impl;

import com.trinitstechnologies.payroll.dto.LeaveCalenderDto;
import com.trinitstechnologies.payroll.exception.LeaveCalenderException;
import com.trinitstechnologies.payroll.model.LeaveCalenderModel;
import com.trinitstechnologies.payroll.repository.LeaveCalenderRepository;
import com.trinitstechnologies.payroll.service.LeaveCalenderService;
import io.micrometer.core.instrument.util.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
@Slf4j
@Service
public class leaveCalenderServiceImpl implements LeaveCalenderService {
    @Autowired
    private LeaveCalenderRepository leaveCalenderRepository;
    @Override
    @Transactional
    public LeaveCalenderDto createLeaveCalender(LeaveCalenderDto request) {
        log.info("Creating the leaveCalender data");
        if (Objects.isNull(request)){
       throw new LeaveCalenderException("Please enter the data");
        }
        if (StringUtils.isEmpty(request.getHolidayName())){

            throw new LeaveCalenderException("Please enter the holidayName");
        }
        if (Objects.isNull(request.getHolidayDate())){

            throw new LeaveCalenderException("Please enter the HolidayDate");
        }
        LeaveCalenderModel model = new LeaveCalenderModel();
        BeanUtils.copyProperties(request, model);

        LeaveCalenderModel savedEntity = leaveCalenderRepository.save(model);

        request.setId(savedEntity.getId());
        return request;
    }

    @Override
    @Transactional
    public LeaveCalenderDto updateLeaveCalenderDto(LeaveCalenderDto dto) {
        log.info("Updating the leaveCalender data based on the Id:{}",dto.getId());
        if (Objects.isNull(dto)){
            throw new LeaveCalenderException("Please enter the data");
        }
        if (StringUtils.isEmpty(dto.getHolidayName())){
            throw new LeaveCalenderException("Please enter the holidayName");
        }
        if (Objects.isNull(dto.getHolidayDate())){
            throw new LeaveCalenderException("Please enter the date");
        }
        Optional<LeaveCalenderModel> findById = leaveCalenderRepository.findById(dto.getId());
        if(findById.isPresent()){
            LeaveCalenderModel leaveCalenderModel = findById.get();

            BeanUtils.copyProperties(dto,leaveCalenderModel);

            leaveCalenderRepository.save(leaveCalenderModel);

        }
        return dto;
    }

    @Override
    @Transactional
    public boolean deleteLeaveCalender(long id) {
        log.info("Deleting the leaveCalender data based on Id:{}",id);
        Optional<LeaveCalenderModel> existingObject = leaveCalenderRepository.findById(id);
        boolean result = existingObject.isPresent();
        if(existingObject.isPresent()){
            leaveCalenderRepository.deleteById(id);
        }
        return result;
    }

    @Override
    public LeaveCalenderDto getLeaveCalender(long id) {
        log.info("Getting the LeaveCalender data based on Id:{}",id);
        Optional<LeaveCalenderModel> findById = leaveCalenderRepository.findById(id);

        LeaveCalenderDto dto = new LeaveCalenderDto();
      if(findById.isPresent()){
          LeaveCalenderModel leaveCalenderModel = findById.get();
          BeanUtils.copyProperties(leaveCalenderModel,dto);

      }
        return dto;
    }

    @Override
    public List<LeaveCalenderDto> getLeaveCalender() {
        log.info("getting the GettingTheLeaveCalender entire data of the liste");
        List<LeaveCalenderModel> findAll = leaveCalenderRepository.findAll();

        List<LeaveCalenderDto> list = new ArrayList<LeaveCalenderDto>();

       for(LeaveCalenderModel model :findAll){
           LeaveCalenderDto dto = new LeaveCalenderDto();
           BeanUtils.copyProperties(model,dto);
              list.add(dto);
       }
        return list;
    }
}
