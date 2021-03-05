package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CartDao;
import com.example.demo.entities.Cart;


@Service
public class CartServiceImp implements CartService {
	@Autowired
	private CartDao cartDao;
	
	
	public CartServiceImp() {}

	@Override
	public Cart addCart(Cart cart) {
		System.out.println(cart);
		cartDao.save(cart);
		return cart;
	}


	

}
