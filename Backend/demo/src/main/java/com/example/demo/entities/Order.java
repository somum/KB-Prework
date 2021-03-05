package com.example.demo.entities;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Embeddable
public class Order {
	
	private String pId;
	private String qty;
	
	public Order(String pId, String qty) {
		super();
		this.pId = pId;
		this.qty = qty;
	}

	public String getpId() {
		return pId;
	}

	public void setpId(String pId) {
		this.pId = pId;
	}

	public String getQty() {
		return qty;
	}

	public void setQty(String qty) {
		this.qty = qty;
	}

	public  Order() {}

	@Override
	public String toString() {
		return "Order [pId=" + pId + ", qty=" + qty + "]";
	}
	
	

}
