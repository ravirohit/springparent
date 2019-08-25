package com.learn.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
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
							ItemEntity itemEntity = new ItemEntity(itemReq.getBarCode(),itemReq.getName(),itemReq.getRate(),0);
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
		
		try{
			String str = mapper.writeValueAsString(customerShoppingSummary);
			System.out.println("customerShoppingSummary:"+str);
			String customerId = customerShoppingSummary.getCustomerId();
			if((customerId == null)||(customerId.equals("")))
				customerShoppingSummary.setCustomerId("UnRegisterUser");
			customerShoppingSummary.setShoppingTime(new Date());
			productRepository.saveCustomerShoppingSummary(customerShoppingSummary);
			return true;
		}catch(Exception e){
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

