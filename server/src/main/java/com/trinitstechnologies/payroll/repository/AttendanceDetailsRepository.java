package com.trinitstechnologies.payroll.repository;

import com.trinitstechnologies.payroll.model.AttendanceDetailsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceDetailsRepository extends JpaRepository<AttendanceDetailsModel, Long> {
}
