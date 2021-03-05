package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Cart;

public interface CartDao extends JpaRepository<Cart,Long> {

}
