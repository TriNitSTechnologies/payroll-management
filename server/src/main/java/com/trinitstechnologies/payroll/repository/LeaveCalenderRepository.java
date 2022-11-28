package com.trinitstechnologies.payroll.repository;

import com.trinitstechnologies.payroll.model.LeaveCalenderModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveCalenderRepository extends JpaRepository<LeaveCalenderModel, Long> {
}
