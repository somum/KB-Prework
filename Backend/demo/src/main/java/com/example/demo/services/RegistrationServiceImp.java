package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserRepository;
import com.example.demo.entities.Product;
import com.example.demo.entities.User;


@Service
public class RegistrationServiceImp implements RegistrationService {
	
	@Autowired
	private UserRepository userDao;
	
	public RegistrationServiceImp() {}
	
	@Override
	public List<User> getUsers() {
		
		return userDao.findAll();
	}

	@Override
	public User getUsers(long userId) {
	
		return userDao.findById(userId).get();
	}

	@Override
	public User addUser(User user) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);
		userDao.save(user);
		return user;
	}

	@Override
	public User deleteUser(long userId) {
		// TODO Auto-generated method stub
		User entity = userDao.getOne(userId);
		userDao.delete(entity);
		return null;
	}

	@Override
	public User updateUser(User user) {
		userDao.save(user);
		return user;
	}
	
	

}
