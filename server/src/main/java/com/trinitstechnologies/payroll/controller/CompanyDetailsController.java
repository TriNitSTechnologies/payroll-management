package com.trinitstechnologies.payroll.controller;

import com.trinitstechnologies.payroll.dto.CompanyDetailsDto;
import com.trinitstechnologies.payroll.service.CompanyDetailsService;
import com.trinitstechnologies.payroll.service.PayrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController("companies")
@RequestMapping("/api/v1/companies")
public class  CompanyDetailsController {

    @Autowired
private CompanyDetailsService companyDetailsService;
    @GetMapping
    public List<CompanyDetailsDto> getExpenses() {
        return companyDetailsService.getCompanyDetails();
    }
    @GetMapping("/{id}")
    public CompanyDetailsDto getCompany(@PathVariable("id") long id){
        return companyDetailsService.getCompanyDetails(id);
    }

    @PostMapping
    public CompanyDetailsDto createCompany(@RequestBody CompanyDetailsDto dto) {
        return companyDetailsService.createCompanyDetails(dto);
    }

    @PutMapping("/{id}")
    public CompanyDetailsDto updateExpense(@PathVariable("id") Long id, @RequestBody CompanyDetailsDto dto) {

        return companyDetailsService.updateCompanyDetailsDto(dto);
    }

    @DeleteMapping("/{id}")
    public Boolean deleteExpense(@PathVariable("id") Long id) {
        return companyDetailsService.deleteCompanyDetails(id);
    }

}
