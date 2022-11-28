package com.trinitstechnologies.payroll.dto;

import lombok.Data;

import java.time.LocalDate;
@Data
public class LeaveCalenderDto {

    private long id;
    private LocalDate holidayDate;
    private String holidayName;
    private String dayOfTheWeek;
}
