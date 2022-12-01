package com.trinitstechnologies.payroll.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Table(name = "Company_Details_Model")
@Entity
public class CompanyDetailsModel {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "companyName")
    private String companyName;

    @Column(name = "mobileNumber")
    private String mobileNumber;

    @Column(name = "pinCode")
    private String pinCode;

    @Column(name = "addressLine1")
    private String addressLine1;

    @Column(name = "addressLine2")
    private String addressLine2;

    @Column(name = "landMark")
    private String landMark;

    @Column(name = "town")
    private String town;

    @Column(name = "state")
    private String state;

    @Column(name = "logoName")
    private String logoName;

    @Column(name = "createdDate")
    private LocalDate createdDate;
}
