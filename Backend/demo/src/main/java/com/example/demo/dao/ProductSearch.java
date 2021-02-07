package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entities.Product;

@RepositoryRestResource
public interface ProductSearch extends JpaRepository<Product,Long>, JpaSpecificationExecutor<Product> {

}
