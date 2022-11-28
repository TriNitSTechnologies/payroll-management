package com.trinitstechnologies.payroll.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

/**
 * @author Sudhakar.Badugu
 * 10-08-2022
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class EmployeePayrollDataDto {
    private EmployeeDataDto employeeData;
    private CompanyDetailsDto companyDetails;
    private int noOfWorkingDays;
    private String dateOfMonth;
    private double basic;
    private double hra;
    private double convAllowance;
    private double leaveTravelAllowance;
    private double medicalAllowance;
    private double specialAllowance;
    private double edAllowance;
    private double bonus;
    private double totalSalary;
    private double professionalTax;
    private Double incomeTax;
    private double totalDeduction;
    private double netSalary;


}
