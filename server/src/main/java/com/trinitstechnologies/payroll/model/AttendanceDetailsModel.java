package com.trinitstechnologies.payroll.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "attendance_details_model")
@Data
public class AttendanceDetailsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "loginTime")
    private LocalDateTime loginTime;

    @Column(name = "logOutTime")
    private LocalDateTime logOutTime;

    @Column(name = "duration")
    private String duration;

    @Column(name = "remarks")
    private String remarks;

    @Column(name = "userId")
    private long userId;
}
