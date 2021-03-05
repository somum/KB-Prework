package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CartDao;
import com.example.demo.entities.Cart;
import com.example.demo.entities.User;
import com.example.demo.services.CartService;

@RestController
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	// post product
		@PostMapping("/cart")
		public Cart addCart(@RequestBody Cart cart) {
			return this.cartService.addCart(cart);
					
		}
	
}
