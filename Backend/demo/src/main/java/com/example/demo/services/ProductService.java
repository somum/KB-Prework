package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Product;

public interface ProductService {
	
	public List<Product> getProducts();
	
	public Product getProducts(long productId);
	
	public Product addProduct(Product product);
	
	public Product deleteProduct(long productId);
	
	public Product updateProduct(Product product);

}
