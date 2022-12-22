package com.trinitstechnologies.payroll.dto;

import lombok.Data;

/**
 * @author Sudhakar.Badugu
 * 07-08-2022
 */
@Data
public class AddressDto {
    private String line1;
    private String line2;
    private String city;
    private String state;
    private String country;
    private String pinCode;
}
