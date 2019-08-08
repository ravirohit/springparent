package com.learn.springmvc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("getitem/{searchKey}")
	public List<String> getItem(@PathVariable("searchKey") String searchKey) {
		System.out.println("get Item called:"+searchKey);
		List<String> itemList = new ArrayList<>();
		itemList.add("abc");
		itemList.add("yrx");
		itemList.add("arc");
		return itemList;
	}

}
