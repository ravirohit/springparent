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
	
	String name;
	Float rate;
	public ItemEntity(){
		
	}
	public ItemEntity(String name, Float rate){
		this.name = name;
		this.rate = rate;
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
	
	
	

}
