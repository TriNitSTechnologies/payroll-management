package com.trinitstechnologies.payroll.controller;

import com.trinitstechnologies.payroll.dto.LeaveCalenderDto;
import com.trinitstechnologies.payroll.service.LeaveCalenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/leaves")
public class LeaveCalenderController {
    @Autowired
    private LeaveCalenderService leaveCalenderService;

    @GetMapping
    public List<LeaveCalenderDto> getLeaves() {

        return leaveCalenderService.getLeaveCalender();
    }

    @PostMapping
    public LeaveCalenderDto postLeaves(@RequestBody LeaveCalenderDto request) {

        return leaveCalenderService.createLeaveCalender(request);
    }

    @PutMapping("/{id}")
    public LeaveCalenderDto updateLeaves(@PathVariable long id, @RequestBody LeaveCalenderDto request) {

        return leaveCalenderService.updateLeaveCalenderDto(request);
    }

    @DeleteMapping("/{id}")
    public boolean deleteLeaves(@PathVariable long id) {

        return leaveCalenderService.deleteLeaveCalender(id);
    }
    @GetMapping("/{id}")
    public LeaveCalenderDto getLeaves(@PathVariable long id) {

        return leaveCalenderService.getLeaveCalender(id);
    }
}
