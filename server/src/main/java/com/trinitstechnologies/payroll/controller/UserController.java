package com.trinitstechnologies.payroll.controller;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.trinitstechnologies.payroll.dto.MessageStatusDto;
import com.trinitstechnologies.payroll.dto.PasswordChangeRequestDto;
import com.trinitstechnologies.payroll.dto.UserDto;
import com.trinitstechnologies.payroll.dto.LoginRequestDto;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Base64Utils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController("demo")
@RequestMapping("/api/v1/user")
public class UserController {
    List<UserDto> users = new ArrayList<UserDto>();

    @GetMapping
    public List<UserDto> getUsers() {
        final List<UserDto> generateUsers = generateUsers();

        return generateUsers;
    }

    @GetMapping("/my-profile")
    public UserDto getMyProfile() {
        final List<UserDto> generateUsers = generateUsers();
        return generateUsers.get(0);
    }

    @PostMapping("/login")
    public ResponseEntity<MessageStatusDto> login(@RequestBody LoginRequestDto dto) {
        MessageStatusDto status = new MessageStatusDto();


        if (Objects.isNull(dto) || !StringUtils.hasText(dto.getUsername()) || !StringUtils.hasText(dto.getPassword())) {
            status.setStatusCode(401);
            status.setMessage("Invalid credentials");
            return new ResponseEntity(status, HttpStatus.UNAUTHORIZED);
        }

        Optional<UserDto> userDto = users.stream().filter(user -> user.getUsername().equalsIgnoreCase(dto.getUsername())
                && user.getPassword().equals(dto.getPassword())).findAny();
        if (userDto.isPresent()) {
            status.setStatusCode(20);
            status.setMessage("Successfully logged in.");

            byte[] encode = Base64Utils.encode(userDto.get().getUsername().getBytes(StandardCharsets.UTF_8));
            HttpHeaders responseHeaders = new HttpHeaders();
            responseHeaders.set("Authorization-key",
                    new String(encode));

            return ResponseEntity.ok()
                    .headers(responseHeaders)
                    .body(status);
        } else {
            return new ResponseEntity(status, HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto dto) {
        final List<UserDto> generateUsers = generateUsers();
        dto.setId((long) (Math.random() * 100000));

		if (Objects.isNull(dto) || !StringUtils.hasText(dto.getUsername()) || !StringUtils.hasText(dto.getPassword())) {
			throw new RuntimeException("Username or password is empty");
		}

		generateUsers.add(dto);
        return ResponseEntity.ok(dto);
    }


    @PutMapping("/{userid}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("userid") Long userid, @RequestBody UserDto dto) {
        final List<UserDto> generateUsers = generateUsers();

		if (Objects.isNull(dto) || !StringUtils.hasText(dto.getUsername()) || !StringUtils.hasText(dto.getPassword())) {
			throw new RuntimeException("Username or password is empty");
		}

        final UserDto findFirst = generateUsers.stream().filter(user -> userid.equals(user.getId())).findFirst().get();
        BeanUtils.copyProperties(dto, findFirst);
        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("/{userid}")
    public ResponseEntity<MessageStatusDto> deleteUser(@PathVariable("userid") Long userid) {
        final List<UserDto> generateUsers = generateUsers();
        final UserDto findFirst = generateUsers.stream().filter(user -> userid.equals(user.getId())).findFirst().get();
        generateUsers.remove(findFirst);

        MessageStatusDto status = new MessageStatusDto();
        status.setStatusCode(200);
        status.setMessage("Successfully deleted");
        return ResponseEntity.ok(status);
    }

    @PutMapping("/password-change/{userid}")
    public ResponseEntity<MessageStatusDto> updateUserPassword(@PathVariable("userid") Long userid, @RequestBody PasswordChangeRequestDto dto) {
        final List<UserDto> generateUsers = generateUsers();

        if (Objects.isNull(dto) || !StringUtils.hasText(dto.getCurrentPassword()) ) {
            throw new RuntimeException("Current password is empty so can't change the ");
        }

        if(!StringUtils.hasText(dto.getNewPassword())) {
            throw new RuntimeException("New password is empty so can't change the ");
        }

        Optional<UserDto> first = generateUsers.stream().filter(user -> userid.equals(user.getId())).findFirst();
        if(!first.isPresent()){
            throw new RuntimeException("No user is available with the given user id " + userid);
        }

        UserDto userDto = first.get();
        userDto.setPassword(dto.getNewPassword());

        MessageStatusDto status = new MessageStatusDto();
        status.setStatusCode(200);
        status.setMessage("Successfully Changed password");
        return ResponseEntity.ok(status);
    }


    private List<UserDto> generateUsers() {
        if (users.isEmpty()) {
            for (int i = 0; i < 10; i++) {
                UserDto user = new UserDto();
                user.setId(i + 1);
                user.setFirstName("SS " + i);
                user.setLastName("B" + i);
                user.setMobileNumber("984899" + i + i + i + i);
                user.setUsername("abc" + i + i + i + "@gmail.com");
                user.setEmail(user.getUsername());
                user.setAge((byte) (25 + i));
                user.setEnableUpdates(false);
                user.setGender("Male");
                user.setOtp(String.valueOf(Math.random() * 10000));
                user.setPassword("Pw" + (int)(Math.random() * 1000) + "12" + i);
                users.add(user);
            }
        }
        return users;
    }
}
