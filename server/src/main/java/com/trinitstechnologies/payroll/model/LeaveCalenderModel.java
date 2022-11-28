package com.trinitstechnologies.payroll.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
@Data
@Table(name = "t_leave_calendar")
@Entity
public class LeaveCalenderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "holidayDate" )
    private LocalDate holidayDate;

    @Column(name = "holidayName")
    private String holidayName;

    @Column(name = "dayOfTheWeek")
    private String dayOfTheWeek;
}
