package com.trinitstechnologies.payroll.dto;

import lombok.Data;

import java.time.LocalDate;

/**
 * @author Sudhakar.Badugu
 * 07-08-2022
 */
@Data
public class EmployeeDataDto {
    private long id;
    private String empName;
    private String empNo;
    private String designation;
    private String bankAccount;
    private String pan;
    private LocalDate doj;
}
