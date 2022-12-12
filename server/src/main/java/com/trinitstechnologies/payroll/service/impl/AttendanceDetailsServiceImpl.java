package com.trinitstechnologies.payroll.service.impl;

import com.trinitstechnologies.payroll.dto.AttendanceDetailsDto;
import com.trinitstechnologies.payroll.model.AttendanceDetailsModel;
import com.trinitstechnologies.payroll.repository.AttendanceDetailsRepository;
import com.trinitstechnologies.payroll.service.AttendanceDetailsService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
@Service
public class AttendanceDetailsServiceImpl implements AttendanceDetailsService {
    @Autowired
    private AttendanceDetailsRepository attendanceDetailsRepository;
    @Override
    public AttendanceDetailsDto createAttendanceDetails(AttendanceDetailsDto request) {
        AttendanceDetailsModel model=new AttendanceDetailsModel();
        BeanUtils.copyProperties(request,model);

        AttendanceDetailsModel saveEntity = attendanceDetailsRepository.save(model);
        request.setId(saveEntity.getId());
        return request;
    }

    @Override
    public AttendanceDetailsDto updateAttendanceDetails(AttendanceDetailsDto dto) {
        Optional<AttendanceDetailsModel> findById = attendanceDetailsRepository.findById(dto.getId());
        if (findById.isPresent()){
            AttendanceDetailsModel attendanceDetailsModel = findById.get();

            BeanUtils.copyProperties(dto,attendanceDetailsModel);
           attendanceDetailsRepository.save(attendanceDetailsModel);
        }
        return dto;
    }

    @Override
    public boolean deleteAttendanceDetails(long id) {
        Optional<AttendanceDetailsModel> existingObject = attendanceDetailsRepository.findById(id);
        boolean result = existingObject.isPresent();
        if (existingObject.isPresent()){
            attendanceDetailsRepository.deleteById(id);
        }
        return result;
    }

    @Override
    public AttendanceDetailsDto getAttendanceDetails(long id) {
        AttendanceDetailsModel attendanceDetailsModel = attendanceDetailsRepository.findById(id).get();

        AttendanceDetailsDto dto =new AttendanceDetailsDto();

        if (Objects.nonNull(attendanceDetailsModel)){
            BeanUtils.copyProperties(attendanceDetailsModel,dto);

        }

        return dto;
    }

    @Override
    public List<AttendanceDetailsDto> getAttendanceDetails() {
        List<AttendanceDetailsModel> findAll = attendanceDetailsRepository.findAll();

        List<AttendanceDetailsDto> list = new ArrayList<>();

        for (AttendanceDetailsModel model: findAll ){
            AttendanceDetailsDto dto =new AttendanceDetailsDto();
            BeanUtils.copyProperties(model, dto);
            list.add(dto);
        }
        return list;
    }
}
