package com.learn.model;

public class ItemEntryReq {

	String barcode;
	String name;
	Float rate;
	int quantity;
	Boolean itemExistFlag;  // if this item is entered using barcode or directly.
	
	
	public String getBarcode() {
		return barcode;
	}
	public void setBarcode(String barcode) {
		this.barcode = barcode;
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
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	


}
