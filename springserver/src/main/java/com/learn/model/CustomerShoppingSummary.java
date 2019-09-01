package com.learn.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class CustomerShoppingSummary {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	String customerId;
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name= "customerShoppingSummary")
	List<CustomerShopping> customerShoppingList;
	Float totalShoppingAmount;
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
	public Date getShoppingTime() {
		return shoppingTime;
	}
	public void setShoppingTime(Date shoppingTime) {
		this.shoppingTime = shoppingTime;
	}
	public Float getTotalShoppingAmount() {
		return totalShoppingAmount;
	}
	public void setTotalShoppingAmount(Float totalShoppingAmount) {
		this.totalShoppingAmount = totalShoppingAmount;
	}
	public List<CustomerShopping> getCustomerShoppingList() {
		return customerShoppingList;
	}
	public void setCustomerShoppingList(List<CustomerShopping> customerShoppingList) {
		this.customerShoppingList = customerShoppingList;
	}
}
