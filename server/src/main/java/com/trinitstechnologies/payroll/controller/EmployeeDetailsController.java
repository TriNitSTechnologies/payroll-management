package com.trinitstechnologies.payroll.controller;

import com.trinitstechnologies.payroll.dto.EmployeeDataDto;
import com.trinitstechnologies.payroll.service.EmployeeDetailsService;
import com.trinitstechnologies.payroll.service.PayrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController("employees")
@RequestMapping("/api/v1/employees")
public class EmployeeDetailsController {
    @Autowired
    private EmployeeDetailsService employeeDetailsService;

@GetMapping("/{id}")
    public  EmployeeDataDto getEmployee(@PathVariable("id") long id){
        return employeeDetailsService.getEmployeeDetails(id);
    }
    @GetMapping
    public List<EmployeeDataDto> getEmployees() {
        return employeeDetailsService.getEmployeeDetails();
    }

    @PostMapping
    public EmployeeDataDto createEmployee(@RequestBody EmployeeDataDto dto) {
        return employeeDetailsService.createEmployeeDetails(dto);
    }

    @PutMapping("/{id}")
    public EmployeeDataDto updateEmployee(@PathVariable("id") Long id, @RequestBody EmployeeDataDto dto) {
        return employeeDetailsService.updateEmployeeDetails(dto);
    }

    @DeleteMapping("/{id}")
    public Boolean deleteEmployee(@PathVariable("id") Long id) {
        return employeeDetailsService.deleteEmployeeDetails(id);
    }
}
