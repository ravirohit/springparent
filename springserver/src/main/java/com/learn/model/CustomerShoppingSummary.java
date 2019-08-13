package com.learn.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CustomerShoppingSummary {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	String customerId;
	Float shoppingSummary;
	Date shoppingTime;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public Float getShoppingSummary() {
		return shoppingSummary;
	}
	public void setShoppingSummary(Float shoppingSummary) {
		this.shoppingSummary = shoppingSummary;
	}
	public Date getShoppingTime() {
		return shoppingTime;
	}
	public void setShoppingTime(Date shoppingTime) {
		this.shoppingTime = shoppingTime;
	}
	
	
	
	
}
