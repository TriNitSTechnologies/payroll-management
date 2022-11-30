package com.trinitstechnologies.payroll.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ContactDto {
	private long id;
	private String name;
	private String mailId;
	private String phoneNumber;
}
