package com.trinitstechnologies.payroll.service;

import com.trinitstechnologies.payroll.dto.EmployeeDataDto;
import com.trinitstechnologies.payroll.dto.EmployeePayrollDataDto;

import java.util.List;

public interface EmployeeDetailsService {
    public EmployeeDataDto createEmployeeDetails(EmployeeDataDto dto);

    EmployeeDataDto updateEmployeeDetails(EmployeeDataDto dto);

    boolean deleteEmployeeDetails(long id);

    EmployeeDataDto getEmployeeDetails(long id);

    List<EmployeeDataDto> getEmployeeDetails();
}
