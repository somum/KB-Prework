package com.example.demo.services;

import java.util.List;


import com.example.demo.entities.User;

public interface RegistrationService {
	
	public List<User> getUsers();
	
	public User getUsers(long userId);
	
	public User addUser(User user);
	
	public User deleteUser(long userId);
	
	public User updateUser(User user);
	
	

}
