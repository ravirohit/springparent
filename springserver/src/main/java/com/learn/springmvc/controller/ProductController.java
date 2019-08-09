package com.learn.springmvc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.learn.model.ItemEntry;

@RestController
public class ProductController {
	
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(path="postitem", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String getItem(@RequestBody List<ItemEntry> item) {
		System.out.println("post Item called:");
		return "{\"status\":\"success\"}";
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(path="getitem/{searchKey}")
	public List<String> getItem(@PathVariable("searchKey") String searchKey) {
		System.out.println("get Item called:"+searchKey);
		List<String> itemList = new ArrayList<>();
		itemList.add("Assam");
		itemList.add("Bihar");
		itemList.add("Delhi");
		itemList.add("Goa");
		itemList.add("Haryana");
		itemList.add("Jammu");
		itemList.add("Kerla");
		itemList.add("MP");
		return itemList;
	}

}
