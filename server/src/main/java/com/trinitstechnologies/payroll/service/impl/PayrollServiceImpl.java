package com.trinitstechnologies.payroll.service.impl;

import com.trinitstechnologies.payroll.dto.CompanyDetailsDto;
import com.trinitstechnologies.payroll.dto.EmployeeDataDto;
import com.trinitstechnologies.payroll.dto.EmployeePayrollDataDto;
import com.trinitstechnologies.payroll.dto.PayrollRequestDataDto;
import com.trinitstechnologies.payroll.model.CompanyDetailsModel;
import com.trinitstechnologies.payroll.model.EmployeeDetailsModel;
import com.trinitstechnologies.payroll.repository.CompanyDetailsRepository;
import com.trinitstechnologies.payroll.repository.EmployeeDetailsRepository;
import com.trinitstechnologies.payroll.service.PayrollService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * @author Sudhakar.Badugu
 * 10-08-2022
 */
@Slf4j
@Service
public class PayrollServiceImpl implements PayrollService {
    @Autowired
    private EmployeeDetailsRepository employeeDetailsRepository;

    @Autowired
    private CompanyDetailsRepository companyDetailsRepository;

    @Override
    public EmployeePayrollDataDto generatePayrollData(PayrollRequestDataDto dto) {
        if (Objects.isNull(dto)) {
            throw new RuntimeException("Need payroll details for generating payslip");
        }
        String empNo = dto.getEmpNo();
        if (!StringUtils.hasText(empNo)) {
            throw new RuntimeException("Enter valid emp no");
        }

        String companyName = dto.getCompanyName();
        if (!StringUtils.hasText(companyName)) {
            throw new RuntimeException("Enter valid company name");
        }

        double grossSalary = dto.getGrossSalary();
        if (grossSalary < 1000) {
            throw new RuntimeException("Gross salary can't be less than 1000");
        }

        Optional<EmployeeDetailsModel> employeeData = employeeDetailsRepository.getEmployeeByEmpNo(empNo);


        if (!employeeData.isPresent()) {
            throw new RuntimeException("No employee available with the given id " + empNo);
        }

        Optional<CompanyDetailsModel> companyByCompanyName = companyDetailsRepository.getCompanyByCompanyName(companyName);
        if (!companyByCompanyName.isPresent()) {
            throw new RuntimeException("No company available with the given name. " + companyName);
        }

        EmployeePayrollDataDto payrollDataDto = new EmployeePayrollDataDto();
        EmployeeDetailsModel employeeDetailsModel = employeeData.get();
        EmployeeDataDto employeeDataDto = new EmployeeDataDto();
        BeanUtils.copyProperties(employeeDetailsModel, employeeDataDto);
        payrollDataDto.setEmployeeData(employeeDataDto);

        CompanyDetailsModel companyDetailsModel = companyByCompanyName.get();
        CompanyDetailsDto companyDetailsDto = new CompanyDetailsDto();
        BeanUtils.copyProperties(companyDetailsModel, companyDetailsDto);

        payrollDataDto.setCompanyDetails(companyDetailsDto);
        payrollDataDto.setNoOfWorkingDays(dto.getNoOfWorkingDays());
        payrollDataDto.setDateOfMonth(LocalDate.now().toString());//TODO set correct here.

        int lengthOfMonth = dto.getPaymentMonth().lengthOfMonth();

        double oneDaySalary = grossSalary / lengthOfMonth;
        double totalSalary = oneDaySalary * dto.getNoOfWorkingDays();

        double basic = totalSalary * (BASIC / 100);
        double hra = totalSalary * (HRA / 100);
        double conAllowance = totalSalary * (CONVEYANCE_ALLOWANCE / 100);
        double lta = totalSalary * (LEAVE_TRAVEL_ALLOWANCE / 100);
        double medicalAllowance = totalSalary * (MEDICAL_ALLOWANCE / 100);
        double specialAllowance = totalSalary * (SPECIAL_ALLOWANCE / 100);
        double educationAllowance = totalSalary * (EDUCATION_ALLOWANCE / 100);
        double bonus = totalSalary * (BONUS / 100);

        double total = basic + hra + conAllowance + lta + medicalAllowance + specialAllowance
                + educationAllowance + bonus;
        payrollDataDto.setBasic(Math.round(basic));
        payrollDataDto.setConvAllowance(Math.round(conAllowance));
        payrollDataDto.setHra(Math.round(hra));
        payrollDataDto.setLeaveTravelAllowance(Math.round(lta));
        payrollDataDto.setMedicalAllowance(Math.round(medicalAllowance));
        payrollDataDto.setSpecialAllowance(Math.round(specialAllowance));
        payrollDataDto.setEdAllowance(Math.round(educationAllowance));
        payrollDataDto.setBonus(Math.round(bonus));
        payrollDataDto.setTotalSalary(Math.round(total));

        double professionalTax = 200;
        double incomeTax = 0;
        double deductions = professionalTax + incomeTax;
        payrollDataDto.setProfessionalTax(Math.round(professionalTax));
        payrollDataDto.setIncomeTax(incomeTax);
        payrollDataDto.setTotalDeduction(Math.round(deductions));

        payrollDataDto.setNetSalary(payrollDataDto.getTotalSalary() - payrollDataDto.getTotalDeduction());
        return payrollDataDto;
    }


}

