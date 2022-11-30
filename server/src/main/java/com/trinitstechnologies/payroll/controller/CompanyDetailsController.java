package com.trinitstechnologies.payroll.controller;

import com.trinitstechnologies.payroll.dto.CompanyDetailsDto;
import com.trinitstechnologies.payroll.service.PayrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController("companies")
@RequestMapping("/api/v1/companies")
public class CompanyDetailsController {

    @Autowired
    private PayrollService payrollService;

    @GetMapping
    public List<CompanyDetailsDto> getExpenses() {
        return payrollService.getCompanies();
    }

    @PostMapping
    public CompanyDetailsDto createCompany(@RequestBody CompanyDetailsDto dto) {
        return payrollService.createCompany(dto);
    }

    @PutMapping("/{companyId}")
    public CompanyDetailsDto updateExpense(@PathVariable("companyId") Long companyId, @RequestBody CompanyDetailsDto dto) {
        return payrollService.updateCompanyDetails(companyId, dto);
    }

    @DeleteMapping("/{companyId}")
    public Boolean deleteExpense(@PathVariable("companyId") Long companyId) {
        return payrollService.deleteCompany(companyId);
    }

}
