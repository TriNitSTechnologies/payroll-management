package com.trinitstechnologies.payroll.service;

import com.trinitstechnologies.payroll.dto.CompanyDetailsDto;
import com.trinitstechnologies.payroll.dto.EmployeeDataDto;
import com.trinitstechnologies.payroll.dto.EmployeePayrollDataDto;
import com.trinitstechnologies.payroll.dto.PayrollRequestDataDto;

import java.util.List;

/**
 * @author Sudhakar.Badugu
 * 10-08-2022
 */
public interface PayrollService {
    double BASIC = 40;
    double HRA = 16;
    double CONVEYANCE_ALLOWANCE = 4;
    double LEAVE_TRAVEL_ALLOWANCE = 6;
    double MEDICAL_ALLOWANCE = 3;
    double SPECIAL_ALLOWANCE = 14;
    double EDUCATION_ALLOWANCE = 16;
    double BONUS = 1;


    //List<CompanyDetailsDto> getCompanies();

    //CompanyDetailsDto createCompany(CompanyDetailsDto dto);

    //CompanyDetailsDto updateCompanyDetails(Long companyId, CompanyDetailsDto dto);

    //Boolean deleteCompany(Long companyId);


    //List<EmployeeDataDto> getEmployees();

    //EmployeeDataDto createEmployee(EmployeeDataDto dto);

    //EmployeeDataDto updateEmployee(Long companyId, EmployeeDataDto dto);

    //Boolean deleteEmployee(Long companyId);

    EmployeePayrollDataDto generatePayrollData(PayrollRequestDataDto dto);
}
