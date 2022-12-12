package com.trinitstechnologies.payroll.controller;

import com.trinitstechnologies.payroll.dto.AttendanceDetailsDto;
import com.trinitstechnologies.payroll.dto.CompanyDetailsDto;
import com.trinitstechnologies.payroll.service.AttendanceDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/attendance")
public class AttendanceDetailsController {
    @Autowired
    private AttendanceDetailsService attendanceDetailsService;

    @PostMapping
    public AttendanceDetailsDto createAttendance(@RequestBody AttendanceDetailsDto dto) {
        return attendanceDetailsService.createAttendanceDetails(dto);
    }

    @PutMapping("/{id}")
    public AttendanceDetailsDto updateAttendance(@PathVariable("id") long id, @RequestBody AttendanceDetailsDto dto) {
        return attendanceDetailsService.updateAttendanceDetails(dto);
    }

    @GetMapping("/{id}")
    public AttendanceDetailsDto getAttendance(@PathVariable("id") long id) {

        return attendanceDetailsService.getAttendanceDetails(id);
    }
    @GetMapping
    public List<AttendanceDetailsDto> getAttendance(){
        return attendanceDetailsService.getAttendanceDetails();
    }
    @DeleteMapping("/{id}")
public Boolean deleteAttendance(@PathVariable("id") long id){
   return attendanceDetailsService.deleteAttendanceDetails(id);
    }
}
