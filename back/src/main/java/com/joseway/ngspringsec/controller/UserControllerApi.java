package com.joseway.ngspringsec.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.joseway.ngspringsec.model.User;
import com.joseway.ngspringsec.services.UserService;

@RestController
@RequestMapping(value="/api/users")
@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
public class UserControllerApi {
	
	@Autowired
	private UserService us;

	
	
	@GetMapping(value="/{username}")
	public User findByUsername(@PathVariable("username") String username) {
		return us.findByUsername(username);
	}


	
	@GetMapping(value="")
	public List<User> findAll() {
		return us.findAll();
	}
	
	@PostMapping(value="")
	public User save(@RequestBody User user) {
		return us.save(user);
	}

	
}
