package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
	
	@Id
	private long id;
	private String title;
	private String description;
	private String price;
	private String tags;
	private String color;
	private String rating;
	private String warrantyPeriod;
	private String imageLink;

	public Product(long id, String title, String description, String price, String tags, String color, String rating,
			String warrantyPeriod, String imageLink) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.tags = tags;
		this.color = color;
		this.rating = rating;
		this.warrantyPeriod = warrantyPeriod;
		this.imageLink = imageLink;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public String getImageLink() {
		return imageLink;
	}

	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}
	

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	
	

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	
	

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getWarrantyPeriod() {
		return warrantyPeriod;
	}

	public void setWarrantyPeriod(String warrantyPeriod) {
		this.warrantyPeriod = warrantyPeriod;
	}
	
	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", description=" + description + ", price=" + price
				+ ", tags=" + tags + ", color=" + color + ", rating=" + rating + ", warrantyPeriod=" + warrantyPeriod
				+ ", imageLink=" + imageLink + "]";
	}


	
}
