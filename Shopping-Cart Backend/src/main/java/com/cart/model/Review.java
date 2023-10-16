package com.cart.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name= "customer_id", referencedColumnName="id")
	private Customer customer;
	
	@ManyToOne
	@JoinColumn(name= "product_id", referencedColumnName="id")
	private Product product;
	
	private String comment;
	
	private int ratting;
	
	public Review() {}
	
	

	public Review(Long id, Customer customer, Product product, String comment, int ratting) {
		super();
		this.id = id;
		this.customer = customer;
		this.product = product;
		this.comment = comment;
		this.ratting = ratting;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public int getRatting() {
		return ratting;
	}

	public void setRatting(int ratting) {
		this.ratting = ratting;
	}
	
	

}
