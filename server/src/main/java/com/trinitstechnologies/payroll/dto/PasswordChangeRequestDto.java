package com.trinitstechnologies.payroll.dto;

import lombok.Data;

@Data
public class PasswordChangeRequestDto {
	private long id;
	private String currentPassword;
	private String newPassword;
}
