package com.learn.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ItemEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	String barCode;
	String name;
	Float rate;
	int inStock;
	
	public ItemEntity(){
		
	}
	public ItemEntity(String barCode, String name, Float rate, int inStock){
		this.barCode = barCode;
		this.name = name;
		this.rate = rate;
		this.inStock = inStock;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Float getRate() {
		return rate;
	}
	public void setRate(Float rate) {
		this.rate = rate;
	}
	
	
	public String getBarCode() {
		return barCode;
	}
	public void setBarCode(String barCode) {
		this.barCode = barCode;
	}
	public int getInStock() {
		return inStock;
	}
	public void setInStock(int inStock) {
		this.inStock = inStock;
	}
	
	
	
	
	

}
