package com.joseway.ngspringsec.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joseway.ngspringsec.model.User;
import com.joseway.ngspringsec.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
		@Autowired
		private UserRepository userRepository;
	
	
		@Override
		public List<User> findAll() {
			return userRepository.findAll();
		}
	
	
		
		@Override
		public User findByUsername(String username) {
			return userRepository.findByUsername(username).get();
		}
	
	
		@Override
		public User save(User user) {
			return userRepository.save(user);
		}
		

}
