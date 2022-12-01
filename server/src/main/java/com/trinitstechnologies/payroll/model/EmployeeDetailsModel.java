package com.trinitstechnologies.payroll.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
@Data
@Table(name = "Employee_Table_Model")
@Entity
public class EmployeeDetailsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "empName")
    private String empName;

    @Column(name = "empNo")
    private String empNo;

    @Column(name = "designation")
    private String designation;

    @Column(name = "bankAccount")
    private String bankAccount;

    @Column(name = "pan")
    private String pan;

    @Column(name = "doj")
    private LocalDate doj;
}
