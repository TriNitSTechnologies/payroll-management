package com.trinitstechnologies.payroll.controller;

import com.trinitstechnologies.payroll.exception.UnAuthorizedException;
import com.trinitstechnologies.payroll.dto.EmployeePayrollDataDto;
import com.trinitstechnologies.payroll.dto.PayrollRequestDataDto;
import com.trinitstechnologies.payroll.service.PayrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Objects;

/**
 * @author Sudhakar.Badugu
 * 10-08-2022
 */
@CrossOrigin
@RestController("payroll")
@RequestMapping("/api/v1/payroll")
public class PayrollController {
    @Autowired
    private PayrollService payrollService;

    @PostMapping
    public ResponseEntity<EmployeePayrollDataDto> generatePayrollData(@RequestBody PayrollRequestDataDto dto,
                                                                      @RequestParam(name = "authorization", required = false) String authorizationParam,
                                                                      HttpServletRequest request) {
        if (Objects.isNull(dto)) {
            throw new RuntimeException("Request dto is null");
        }

        String header = request.getHeader("Authorization-key");

        //This is just backward compatiblity from swagger
        header = Objects.nonNull(header) ? header : authorizationParam;
        if (!StringUtils.hasText(header)) {
            throw new UnAuthorizedException("Your are not authorized");
        }

        return ResponseEntity.ok(payrollService.generatePayrollData(dto));
    }
}
