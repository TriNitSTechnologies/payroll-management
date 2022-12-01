package com.trinitstechnologies.payroll.service.impl;

import com.trinitstechnologies.payroll.dto.CompanyDetailsDto;
import com.trinitstechnologies.payroll.model.CompanyDetailsModel;
import com.trinitstechnologies.payroll.repository.CompanyDetailsRepository;
import com.trinitstechnologies.payroll.service.CompanyDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
@Slf4j
@Service
public class CompanyDetailsServiceImpl implements CompanyDetailsService {
    @Autowired
    private CompanyDetailsRepository companyDetailsRepository;

    @Override
    public CompanyDetailsDto createCompanyDetails(CompanyDetailsDto request) {
        log.info("Creating the new company data");
        if (Objects.isNull(request)){
            throw new RuntimeException("Please enter the valid company");
        }
        CompanyDetailsModel model = new CompanyDetailsModel();
        BeanUtils.copyProperties(request,model);
        CompanyDetailsModel savedEntity = companyDetailsRepository.save(model);
        request.setId(savedEntity.getId());
        return request;
    }

    @Override
    public CompanyDetailsDto updateCompanyDetailsDto(CompanyDetailsDto dto) {
        Optional<CompanyDetailsModel> findById =companyDetailsRepository.findById(dto.getId());
        if (findById.isPresent()){
            CompanyDetailsModel companyDetailsModel = findById.get();

            BeanUtils.copyProperties(dto, companyDetailsModel);
            companyDetailsRepository.save(companyDetailsModel);
        }
            return dto;
    }

    @Override
    public boolean deleteCompanyDetails(long id) {
        Optional<CompanyDetailsModel> existingObject = companyDetailsRepository.findById(id);
        boolean result = existingObject.isPresent();

        if (existingObject.isPresent()){
            companyDetailsRepository.deleteById(id);
        }
        return result;
    }

    @Override
    public CompanyDetailsDto getCompanyDetails(long id) {
        Optional<CompanyDetailsModel> findById = companyDetailsRepository.findById(id);

        CompanyDetailsDto dto = new CompanyDetailsDto();

        if(findById.isPresent()){
            CompanyDetailsModel companyDetailsModel = findById.get();
            BeanUtils.copyProperties(companyDetailsModel, dto);

    }
        return dto;
    }

    @Override
    public List<CompanyDetailsDto> getCompanyDetails() {
        List<CompanyDetailsModel> findAll = companyDetailsRepository.findAll();

        List<CompanyDetailsDto> list = new ArrayList<>();

        for (CompanyDetailsModel model: findAll){
            CompanyDetailsDto dto = new CompanyDetailsDto();
            BeanUtils.copyProperties(model, dto);
            list.add(dto);
        }
        return list;
    }


}
