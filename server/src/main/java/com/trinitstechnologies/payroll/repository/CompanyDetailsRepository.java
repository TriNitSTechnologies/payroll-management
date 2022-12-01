package com.trinitstechnologies.payroll.repository;

import com.trinitstechnologies.payroll.model.CompanyDetailsModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompanyDetailsRepository extends JpaRepository<CompanyDetailsModel, Long> {
    Optional<CompanyDetailsModel> getCompanyByCompanyName(String companyName);
}
