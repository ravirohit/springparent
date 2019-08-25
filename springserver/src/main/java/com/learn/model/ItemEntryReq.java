package com.learn.model;

public class ItemEntryReq {

	String barCode;
	String name;
	Float rate;
	int inStock;
	Boolean itemExistFlag;
	
	public String getBarCode() {
		return barCode;
	}
	public void setBarCode(String barCode) {
		this.barCode = barCode;
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
	public Boolean getItemExistFlag() {
		return itemExistFlag;
	}
	public void setItemExistFlag(Boolean itemExistFlag) {
		this.itemExistFlag = itemExistFlag;
	}
	public int getInStock() {
		return inStock;
	}
	public void setInStock(int inStock) {
		this.inStock = inStock;
	}
	


}
