package com.trinitstechnologies.payroll.service;

import com.trinitstechnologies.payroll.dto.AttendanceDetailsDto;
import com.trinitstechnologies.payroll.model.AttendanceDetailsModel;

import java.util.List;

public interface AttendanceDetailsService {

    public AttendanceDetailsDto createAttendanceDetails(AttendanceDetailsDto request);

    public AttendanceDetailsDto updateAttendanceDetails(AttendanceDetailsDto dto);

    boolean deleteAttendanceDetails(long id);

    public AttendanceDetailsDto getAttendanceDetails(long id);

    List<AttendanceDetailsDto> getAttendanceDetails();
}
