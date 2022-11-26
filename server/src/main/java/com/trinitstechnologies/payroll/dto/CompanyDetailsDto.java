package com.trinitstechnologies.payroll.dto;

import lombok.Data;

import java.time.LocalDate;

/**
 * @author Sudhakar.Badugu
 * 07-08-2022
 */
@Data
public class CompanyDetailsDto {
    private long id;
    private String companyName;
    private String mobileNumber;
    private String pinCode;
    private String addressLine1;
    private String addressLine2;
    private String landMark;
    private String town;
    private String state;
    private String logoName;
    private LocalDate createdDate;
}
