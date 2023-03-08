package com.madhu.ecart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madhu.ecart.entity.Product;
import com.madhu.ecart.repository.EcartRepository;

@Service
public class EcartService {
@Autowired
private EcartRepository repo;
 public Product saveDetails(Product product) {
	 return repo.save(product);
 }
 public List <Product> getAllDetails(){

	 return repo.findAll();

	 }
 public Optional<Product> getaDetail(int productId){
		
		return repo.findById(productId);
	}
 public Product updateDetails(Product product) {
		
		return repo.save(product);

	}
 public void deleteById(int id) {

	 repo.deleteById(id);

	 }
}
