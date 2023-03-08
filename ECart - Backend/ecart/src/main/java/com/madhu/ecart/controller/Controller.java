package com.madhu.ecart.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.madhu.ecart.entity.Product;
import com.madhu.ecart.service.EcartService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping("/")
public class Controller {
	@Autowired
	private EcartService ser;
	@PostMapping("/products")
	public String createProduct(@RequestBody Product product) {
		ser.saveDetails(product);
		return "Value added";
	}
	@GetMapping("/products")

	public List<Product> getProducts(){

	return ser.getAllDetails();

	}
	@GetMapping("/products/{productId}")

	public Optional<Product> getProductById(@PathVariable("productId") int productId){

	return ser.getaDetail(productId);
	}
	@PutMapping("/productsupdt")

	public String updateProducts(@RequestBody Product product)
	{
	ser.updateDetails(product);

	return "Value Updated";

	}
	@DeleteMapping("/products/{productId}")
	 public String deleteProduct(@PathVariable int productId) {
		 ser.deleteById(productId);
		 return "Deleted!";
	 }
	 
}
