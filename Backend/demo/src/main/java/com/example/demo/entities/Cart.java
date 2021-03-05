package com.example.demo.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;
	
	@Column(nullable = false, unique = false)
    private Long userId;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity = OrderItem.class)
	@JoinColumn(name = "cart_id")
	private List<OrderItem> ordeItem;
	
	public Cart(){}
	


	public Cart(Long cartId, Long userId, List<OrderItem> ordeItem) {
		super();
		this.cartId = cartId;
		this.userId = userId;
		this.ordeItem = ordeItem;
	}



	public Long getCartId() {
		return cartId;
	}



	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}



	public Long getUserId() {
		return userId;
	}



	public void setUserId(Long userId) {
		this.userId = userId;
	}



	public List<OrderItem> getOrdeItem() {
		return ordeItem;
	}



	public void setOrdeItem(List<OrderItem> ordeItem) {
		this.ordeItem = ordeItem;
	}



	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", userId=" + userId + ", ordeItem=" + ordeItem + "]";
	}
	
	
	
	
	@Entity
	static class OrderItem {
		
			@Id
			@GeneratedValue(strategy = GenerationType.IDENTITY)
			private Long Id;
			@Column
		    private Long pid;
			@Column
		    private Long qty;
		    

		    @Column(name = "cart_id")
		    private Long cartId;
		    
		    public OrderItem(){}
		    
		    
		    

			public OrderItem(Long id, Long pid, Long qty, Long cartId) {
				super();
				Id = id;
				this.pid = pid;
				this.qty = qty;
				this.cartId = cartId;
			}




			public Long getId() {
				return Id;
			}




			public void setId(Long id) {
				Id = id;
			}




			public Long getPid() {
				return pid;
			}




			public void setPid(Long pid) {
				this.pid = pid;
			}




			public Long getQty() {
				return qty;
			}




			public void setQty(Long qty) {
				this.qty = qty;
			}




			public Long getCartId() {
				return cartId;
			}




			public void setCartId(Long cartId) {
				this.cartId = cartId;
			}




			@Override
			public String toString() {
				return "OrderItem [Id=" + Id + ", pid=" + pid + ", qty=" + qty + ", cartId=" + cartId + "]";
			}
		    
		    
		    
		   
		    
		   
		    
		    


		
		

	}
	


}


