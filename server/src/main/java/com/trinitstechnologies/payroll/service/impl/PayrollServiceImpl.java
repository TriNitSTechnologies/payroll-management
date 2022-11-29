package com.trinitstechnologies.payroll.service.impl;

import com.trinitstechnologies.payroll.dto.CompanyDetailsDto;
import com.trinitstechnologies.payroll.dto.EmployeeDataDto;
import com.trinitstechnologies.payroll.dto.EmployeePayrollDataDto;
import com.trinitstechnologies.payroll.dto.PayrollRequestDataDto;
import com.trinitstechnologies.payroll.service.PayrollService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
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
    List<CompanyDetailsDto> companyDetailsList = new ArrayList<>();
    List<EmployeeDataDto> employeeDataDtoList = new ArrayList<>();

    public List<CompanyDetailsDto> getCompanies() {
        final List<CompanyDetailsDto> CompanyDetailsDtoList = generateCompanies();
        return CompanyDetailsDtoList;
    }

    public CompanyDetailsDto createCompany(CompanyDetailsDto dto) {
        final List<CompanyDetailsDto> CompanyDetailsDtoList = generateCompanies();
        dto.setId((long) (Math.random() * 100000));

        if (Objects.isNull(dto)) {
            throw new RuntimeException("CompanyDetail dto is null");
        }

        Optional<CompanyDetailsDto> companyDetailsDto = CompanyDetailsDtoList.stream()
                .filter(companyDetails -> companyDetails.getCompanyName()
                        .equalsIgnoreCase(dto.getCompanyName())).findFirst();
        if (companyDetailsDto.isPresent()) {
            throw new RuntimeException("Another company exist with the given name " + dto.getCompanyName());
        }

        CompanyDetailsDtoList.add(dto);
        return dto;
    }


    public CompanyDetailsDto updateCompanyDetails(Long companyId, CompanyDetailsDto dto) {
        final List<CompanyDetailsDto> companyDetailsDtoList = generateCompanies();

        if (Objects.isNull(dto)) {
            throw new RuntimeException("Company details can't be null");
        }

        Optional<CompanyDetailsDto> first = companyDetailsDtoList.stream()
                .filter(user -> companyId.equals(user.getId())).findFirst();
        if (!first.isPresent()) {
            throw new RuntimeException("Company not exist with the given id " + companyId);
        }

        final CompanyDetailsDto findFirst = first.get();
        BeanUtils.copyProperties(dto, findFirst);
        return dto;
    }

    public Boolean deleteCompany(Long companyId) {
        final List<CompanyDetailsDto> companyDetailsDtoList = generateCompanies();
        Optional<CompanyDetailsDto> first = companyDetailsDtoList.stream()
                .filter(user -> companyId.equals(user.getId())).findFirst();
        if (!first.isPresent()) {
            throw new RuntimeException("Company not exist with the given id " + companyId);
        }

        final CompanyDetailsDto findFirst = first.get();
        companyDetailsDtoList.remove(findFirst);
        return true;
    }

    public List<EmployeeDataDto> getEmployees() {
        final List<EmployeeDataDto> EmployeeDataDtoList = generateEmployees();

        return EmployeeDataDtoList;
    }

    public EmployeeDataDto createEmployee(EmployeeDataDto dto) {
        final List<EmployeeDataDto> employeeDataDtoList = generateEmployees();
        dto.setId((long) (Math.random() * 100000));

        if (Objects.isNull(dto)) {
            throw new RuntimeException("Employee dto is null");
        }

        Optional<EmployeeDataDto> employeeData = employeeDataDtoList.stream()
                .filter(companyDetails -> companyDetails.getEmpNo()
                        .equalsIgnoreCase(dto.getEmpNo())).findFirst();
        if (employeeData.isPresent()) {
            throw new RuntimeException("Another employee exist with the given emp no " + dto.getEmpNo());
        }

        employeeDataDtoList.add(dto);
        return dto;
    }


    public EmployeeDataDto updateEmployee(Long employeeId, EmployeeDataDto dto) {
        final List<EmployeeDataDto> employeeDataDtoList = generateEmployees();

        if (Objects.isNull(dto)) {
            throw new RuntimeException("Employee details can't be null");
        }

        Optional<EmployeeDataDto> first = employeeDataDtoList.stream()
                .filter(user -> employeeId.equals(user.getId())).findFirst();
        if (!first.isPresent()) {
            throw new RuntimeException("Invalid employee id " + employeeId);
        }

        final EmployeeDataDto findFirst = first.get();
        BeanUtils.copyProperties(dto, findFirst);
        return dto;
    }

    public Boolean deleteEmployee(Long employeeId) {
        final List<EmployeeDataDto> EmployeeDataDtoList = generateEmployees();
        Optional<EmployeeDataDto> first = EmployeeDataDtoList.stream()
                .filter(user -> employeeId.equals(user.getId())).findFirst();
        if (!first.isPresent()) {
            throw new RuntimeException("Can't delete employee, Invalid employee id " + employeeId);
        }

        final EmployeeDataDto findFirst = first.get();
        employeeDataDtoList.remove(findFirst);
        return true;
    }

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

        List<EmployeeDataDto> employees = getEmployees();
        Optional<EmployeeDataDto> employeeData = employees.stream()
                .filter(employee -> empNo.equalsIgnoreCase(employee.getEmpNo())).findFirst();

        if (!employeeData.isPresent()) {
            throw new RuntimeException("No employee available with the given id " + empNo);
        }

        List<CompanyDetailsDto> companies = getCompanies();
        Optional<CompanyDetailsDto> companyDetailsData = companies.stream()
                .filter(employee -> companyName.equalsIgnoreCase(employee.getCompanyName())).findFirst();

        if (!companyDetailsData.isPresent()) {
            throw new RuntimeException("No company available with the given name. " + empNo);
        }

        EmployeePayrollDataDto payrollDataDto = new EmployeePayrollDataDto();
        payrollDataDto.setEmployeeData(employeeData.get());
        payrollDataDto.setCompanyDetails(companyDetailsData.get());
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


    private List<EmployeeDataDto> generateEmployees() {
        if (employeeDataDtoList.isEmpty()) {
            for (int i = 0; i < 10; i++) {
                EmployeeDataDto user = new EmployeeDataDto();
                user.setId(i + 1);
                user.setDesignation("Software engineer");
                user.setBankAccount("5020223" + ((int) (Math.random() * 10000)));
                user.setDoj(LocalDate.now().minusMonths(((int) (Math.random() * 10))));
                user.setEmpName("TriNitS" + i);
                user.setPan("PAN" + (int) (Math.random() * 100000));
                user.setEmpNo("TRINITS-" + (i + 1));

                employeeDataDtoList.add(user);
            }
        }
        return employeeDataDtoList;
    }


    private List<CompanyDetailsDto> generateCompanies() {
        if (companyDetailsList.isEmpty()) {
            for (int i = 0; i < 10; i++) {
                CompanyDetailsDto user = new CompanyDetailsDto();
                user.setId(i + 1);
                user.setAddressLine1("Naidupeta " + i);
                user.setAddressLine2("Nellore " + i);
                user.setCreatedDate(LocalDate.now());
                user.setCompanyName("TriNitS Technlogogies " + i);
                user.setLogoName("trinits.jpg");
                user.setLandMark("Muncipality office");
                user.setPinCode("524421");
                user.setTown("Nellore");
                user.setState("Andhra pradesh");
                user.setMobileNumber("95000" + ((int) Math.random() * 100000));
                companyDetailsList.add(user);
            }
        }
        return companyDetailsList;
    }
}
