package com.trinitstechnologies.payroll.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
public class UserDto {
	private long id;
	private String username;
	private String email;
	private byte age;
	private String mobileNumber;
	private String otp;
	private String firstName;
	private String lastName;
	private String middleName;
	private String gender;
	private boolean enableUpdates;
	private String password;

	@JsonInclude(JsonInclude.Include.NON_EMPTY)
	private AddressDto address;
}
