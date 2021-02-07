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
import com.example.demo.services.ProductService;


@RestController
public class MyController {
	
	@Autowired
	private ProductService productService; 
	
	@GetMapping("/home")
	public String home() {
		return "home page";
	}
	
	// get products
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/products")
	public List<Product> getProducts() {
		return this.productService.getProducts();
		
	}
	
	// get single course
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/products/{productId}")
	public Product getProduct(@PathVariable String productId) {
		return this.productService.getProducts(Long.parseLong(productId));
				
	}
		
	// post product
		@PostMapping("/products")
		public Product addProduct(@RequestBody Product product) {
			return this.productService.addProduct(product);
			
		}

	// Update Single product
		@PutMapping("/products")
		public Product updateProduct(@RequestBody Product product) {
			return this.productService.updateProduct(product);
			
		}
		

	// delete single product
		@DeleteMapping("/products/{productId}")
		public Product deleteProduct(@PathVariable String productId) {
			
			return this.productService.deleteProduct(Long.parseLong(productId));
					
		}
		
	

}
