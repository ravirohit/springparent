package com.learn.springmvc.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.learn.model.CustomerShoppingSummary;
import com.learn.model.ItemEntity;
import com.learn.model.ItemEntryReq;
import com.learn.service.ProductService;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ProductController {
	
	private List<ItemEntity> itemList = new ArrayList<>();
	private Map<String, ItemEntity> itemMap = new HashMap<>();
	
	private ObjectMapper mapper = new ObjectMapper();
	@Autowired
	private ProductService productService;
	
	//@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(path="saveorupdatetitem" ,consumes = MediaType.APPLICATION_JSON_VALUE)
	public String postItem(@RequestBody List<ItemEntryReq> itemListReq) {
		System.out.println("post Item called:"+itemListReq);
		
		try{
			productService.saveOrUpdateItem(itemListReq);
		}catch(Exception e) {
			System.out.println("exception occur while saving Product info request:"+e);
			return "{\"status\":\"failure\"}";
		}
		
		
		return "{\"status\":\"success\"}";
	}
	
	//@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(path="getiteminfo")
	public List<ItemEntity> getItem() {
		System.out.println("get Item called:");
		
		return productService.getProductList();
	}
	//@CrossOrigin(origins="*", allowedHeaders="*")
	@PostMapping(path="saveshoppingsummary")
	public String saveCustomerShoppingSummary(@RequestBody CustomerShoppingSummary customerShoppingSummary){
		if(productService.saveCustomerShoppingSummary(customerShoppingSummary)){
			return "{\"status\":\"success\"}";	
		}else{
			return "{\"status\":\"failure\"}";
		}
	}
	@GetMapping(path="getshoppingsummary")
	public List<CustomerShoppingSummary> getShoppingSummary(@RequestParam(name="sdate",required=false) String sdate,
			@RequestParam(name="edate",required=false) String edate){
		System.out.println("sdate:"+sdate+"  edate:"+edate);
		List<CustomerShoppingSummary> shoppingSummary = null;
		shoppingSummary = productService.getShoppingSummary(sdate, edate);
		return shoppingSummary;	
	}

}
