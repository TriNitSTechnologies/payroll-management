package com.trinitstechnologies.payroll.dto;

import lombok.Data;

import java.time.LocalDate;

/**
 * @author Sudhakar.Badugu
 * 10-08-2022
 */
@Data
public class PayrollRequestDataDto {
    private String empNo;
    private String companyName;
    private LocalDate paymentMonth;
    private int noOfWorkingDays;
    private double grossSalary;
}
