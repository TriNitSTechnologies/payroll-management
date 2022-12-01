package com.trinitstechnologies.payroll.repository;

import com.trinitstechnologies.payroll.model.EmployeeDetailsModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeDetailsRepository extends JpaRepository<EmployeeDetailsModel, Long> {
    Optional<EmployeeDetailsModel> getEmployeeByEmpNo(String empNo);
}
