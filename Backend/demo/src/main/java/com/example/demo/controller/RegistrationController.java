package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.entities.User;
import com.example.demo.services.RegistrationService;

@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService registrationService; 
	
	
	// get users
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/registration")
	public List<User> getUsers() {
		return this.registrationService.getUsers();
			
	}
		
	// get single user
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/registration/{userId}")
	public User getUsers(@PathVariable String userId) {
		return this.registrationService.getUsers(Long.parseLong(userId));
					
	}
	
	// Update Single user
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/registration")
	public User updateUser(@RequestBody User user) {
		return this.registrationService.updateUser(user);
				
	}
	
	// delete single user
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/registration/{userId}")
	public User deleteUser(@PathVariable String userId) {
		return this.registrationService.deleteUser(Long.parseLong(userId));
						
	}
	
	
	
	
	// post product
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/registration")
	public User addUser(@RequestBody User user) {
		return this.registrationService.addUser(user);
				
	}
}
