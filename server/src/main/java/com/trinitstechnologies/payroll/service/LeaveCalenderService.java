package com.trinitstechnologies.payroll.service;

import com.trinitstechnologies.payroll.dto.LeaveCalenderDto;

import java.util.List;

public interface LeaveCalenderService {
    public LeaveCalenderDto createLeaveCalender(LeaveCalenderDto request);
    LeaveCalenderDto updateLeaveCalenderDto(LeaveCalenderDto dto);
    boolean deleteLeaveCalender(long id);
    LeaveCalenderDto getLeaveCalender(long id);
    List<LeaveCalenderDto>getLeaveCalender();
}
