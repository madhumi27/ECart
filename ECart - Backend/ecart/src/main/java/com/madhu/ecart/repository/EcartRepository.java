package com.madhu.ecart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.madhu.ecart.entity.Product;

public interface EcartRepository extends JpaRepository<Product, Integer> {

}
