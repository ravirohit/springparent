package com.learn.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.learn.model.CustomerShopping;
import com.learn.model.CustomerShoppingSummary;
import com.learn.model.ItemEntity;
import com.learn.model.ItemEntryReq;
import com.learn.repository.ProductRepository;



@Service
public class ProductService {
	
	private List<ItemEntity> itemList1 = new ArrayList<>();
	private ObjectMapper mapper = new ObjectMapper();
	@Autowired
	private ProductRepository productRepository;
	
	public String saveOrUpdateItem(List<ItemEntryReq> item) {
		List<ItemEntity> newItemList = new ArrayList<>();
		List<ItemEntryReq> oldItemList = new ArrayList<>();
		try{
			String str = mapper.writeValueAsString(item);
			System.out.println("request payload\n:"+str);
			if(item != null) {
				System.out.println("item req size:"+item.size());
	 			item.forEach(itemReq -> {
	 				try{
		 				String str1 = mapper.writeValueAsString(itemReq);
		 				System.out.println("request payload\n:"+str1);
						if((itemReq.getItemExistFlag() == null )||(itemReq.getItemExistFlag())) // null when making entry in inventory, true when updating inventory
						{
							oldItemList.add(itemReq);
						}
						else{
							ItemEntity itemEntity = new ItemEntity(itemReq.getBarcode(),itemReq.getName(),itemReq.getRate(),0);
							newItemList.add(itemEntity);
						}
	 				}catch(Exception e){
	 					System.out.println("exception occur:"+e);
	 				}
	 				
				});
	 			
	 			productRepository.saveOrUpdateItem(newItemList, oldItemList);
	 			
			}
			else {
				return "{\"status\":\"no record in requ\"}";
			}
		}catch(Exception e) {
			System.out.println("exception occur while service request:"+e);
			return "{\"status\":\"failure\"}";
		}
		
		return "{\"status\":\"success\"}";
	}
	public List<ItemEntity> getProductList(){
		List<ItemEntity> productList = productRepository.getProductList();
		return productList;
	}
	public boolean saveCustomerShoppingSummary(CustomerShoppingSummary customerShoppingSummary){
		Map<String, Integer> itemParchased = new HashMap<>();
		
		
		try{
			String str = mapper.writeValueAsString(customerShoppingSummary);
			System.out.println("customerShoppingSummary in details: "+str);
			System.out.println("======================");
			List<CustomerShopping> shoppingList = customerShoppingSummary.getCustomerShoppingList();
			for(CustomerShopping obj: shoppingList){
				String barCode = obj.getBarcode();
				int quantity = obj.getQuantity();
				itemParchased.put(barCode,quantity);
			}
			
			str = mapper.writeValueAsString(shoppingList);
			System.out.println("CustomerShopping in details: "+str);
			System.out.println("itemParchased:"+itemParchased);
			String customerId = customerShoppingSummary.getCustomerId();
			if((customerId == null)||(customerId.equals("")))
				customerShoppingSummary.setCustomerId("UnRegisterUser");
			customerShoppingSummary.setShoppingTime(new Date());
			productRepository.saveCustomerShoppingSummary(customerShoppingSummary, itemParchased);
			return true;
		}catch(Exception e){
			System.out.println("Exception occur while saving shopping details: "+e);
		    return false;
		}
	}
	public List<CustomerShoppingSummary> getShoppingSummary(String sdate, String edate){
		List<CustomerShoppingSummary> summaryList = null;
		try{
			
			summaryList = productRepository.getShoppingSummary(sdate, edate);
			return summaryList;
		}catch(Exception e){
		    return summaryList;
		}
	}
}

