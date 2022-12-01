package com.trinitstechnologies.payroll.service;

import com.trinitstechnologies.payroll.dto.CompanyDetailsDto;

import java.util.List;

public interface CompanyDetailsService {
    public CompanyDetailsDto createCompanyDetails(CompanyDetailsDto request);

    CompanyDetailsDto updateCompanyDetailsDto(CompanyDetailsDto dto);

    boolean deleteCompanyDetails(long id);

    CompanyDetailsDto getCompanyDetails(long id);

    List<CompanyDetailsDto>getCompanyDetails();
}
