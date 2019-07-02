package com.joseway.ngspringsec;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.joseway.ngspringsec.model.Role;
import com.joseway.ngspringsec.model.RoleName;
import com.joseway.ngspringsec.model.User;
import com.joseway.ngspringsec.repository.RoleRepository;
import com.joseway.ngspringsec.repository.UserRepository;

@SpringBootApplication
public class SpringBootJwtAuthenticationApplication implements CommandLineRunner{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	PasswordEncoder encoder;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootJwtAuthenticationApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		User u1 = new User();
		u1.setEmail("t.requillart@hotmail.fr");
		u1.setName("Tom");
		u1.setPassword(encoder.encode("Password1"));
		u1.setUsername("tom");
		createUser(u1, RoleName.ROLE_ADMIN);
		
		User u2 = new User();
		u2.setEmail("g.herlin@hotmail.com");
		u2.setName("Geo");
		u2.setPassword(encoder.encode("Password1"));
		u2.setUsername("geo");
		createUser(u2, RoleName.ROLE_PM);
		
		
	}
	private User createUser(User user, RoleName roleName) {
		if(userRepository.existsByUsername(user.getUsername())) {
			System.out.println(user.getUsername() + " already exists. Nothing to do");
		}else {
			Set<Role> roles = new HashSet<>();
			Role role = roleRepository.findByName(roleName).get();
			roles.add(role);
			user.setRoles(roles);
			user = userRepository.save(user);
		}
		return user;
	}
}
