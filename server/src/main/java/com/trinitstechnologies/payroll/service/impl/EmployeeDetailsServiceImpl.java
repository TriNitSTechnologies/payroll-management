package com.trinitstechnologies.payroll.service.impl;

import com.trinitstechnologies.payroll.dto.CompanyDetailsDto;
import com.trinitstechnologies.payroll.dto.EmployeeDataDto;
import com.trinitstechnologies.payroll.dto.EmployeePayrollDataDto;
import com.trinitstechnologies.payroll.model.CompanyDetailsModel;
import com.trinitstechnologies.payroll.model.EmployeeDetailsModel;
import com.trinitstechnologies.payroll.repository.EmployeeDetailsRepository;
import com.trinitstechnologies.payroll.service.EmployeeDetailsService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeDetailsServiceImpl implements EmployeeDetailsService {

    @Autowired
    private EmployeeDetailsRepository employeeDetailsRepository;
    @Override
    public EmployeeDataDto createEmployeeDetails(EmployeeDataDto request) {
        EmployeeDetailsModel model =new EmployeeDetailsModel();
        BeanUtils.copyProperties(request, model);

        EmployeeDetailsModel saveEntity = employeeDetailsRepository.save(model);
        request.setId(saveEntity.getId());
        return request;
    }

    @Override
    public EmployeeDataDto updateEmployeeDetails(EmployeeDataDto dto) {
        Optional<EmployeeDetailsModel> findById = employeeDetailsRepository.findById(dto.getId());

        if (findById.isPresent()){
            EmployeeDetailsModel employeeDetailsModel =findById.get();
            BeanUtils.copyProperties(dto, employeeDetailsModel);
            employeeDetailsRepository.save(employeeDetailsModel);
        }
        return dto;
    }

    @Override
    public boolean deleteEmployeeDetails(long id) {
        Optional<EmployeeDetailsModel> findById = employeeDetailsRepository.findById(id);
      boolean result = findById.isPresent();
        if (findById.isPresent()){
            employeeDetailsRepository.deleteById(id);
        }
        return result;
    }

    @Override
    public EmployeeDataDto getEmployeeDetails(long id) {
        Optional<EmployeeDetailsModel> findById = employeeDetailsRepository.findById(id);
       EmployeeDataDto dto =new EmployeeDataDto();
       if (findById.isPresent()){
           EmployeeDetailsModel employeeDetailsModel = findById.get();
          BeanUtils.copyProperties(employeeDetailsModel,dto);
       }
        return dto;
    }

    @Override
    public List<EmployeeDataDto> getEmployeeDetails() {
        List<EmployeeDetailsModel> findAll = employeeDetailsRepository.findAll();

        List<EmployeeDataDto> list = new ArrayList<>();
        for (EmployeeDetailsModel model: findAll){
            EmployeeDataDto dto = new EmployeeDataDto();
            BeanUtils.copyProperties(model,dto);
            list.add(dto);
        }
        return list;
    }
}
