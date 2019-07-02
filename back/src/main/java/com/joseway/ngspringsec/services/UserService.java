package com.joseway.ngspringsec.services;

import java.util.List;


import com.joseway.ngspringsec.model.User;

public interface UserService {

	public List<User> findAll();
	public User findByUsername(String username);
	public User save(User user);
}
