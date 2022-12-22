package com.trinitstechnologies.payroll.controller;

import com.trinitstechnologies.payroll.dto.EmployeeDataDto;
import com.trinitstechnologies.payroll.service.PayrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController("employees")
@RequestMapping("/api/v1/employees")
public class EmployeeDetailsController {
    @Autowired
    private PayrollService payrollService;

    @GetMapping
    public List<EmployeeDataDto> getEmployees() {
        return payrollService.getEmployees();
    }

    @PostMapping
    public EmployeeDataDto createEmployee(@RequestBody EmployeeDataDto dto) {
        return payrollService.createEmployee(dto);
    }

    @PutMapping("/{employeeId}")
    public EmployeeDataDto updateEmployee(@PathVariable("employeeId") Long employeeId, @RequestBody EmployeeDataDto dto) {
        return payrollService.updateEmployee(employeeId, dto);
    }

    @DeleteMapping("/{employeeId}")
    public Boolean deleteEmployee(@PathVariable("employeeId") Long employeeId) {
        return payrollService.deleteEmployee(employeeId);
    }
}
