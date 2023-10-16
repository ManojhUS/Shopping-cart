package com.cart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cart.model.Product;
import com.cart.service.ProductService;
import com.cart.util.ProductUtil;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v2/")
public class ProductController {
	@Autowired
	private ProductService service;
	
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAll(){
		return service.getAll();
	}
	
	@GetMapping("/product/{id}")
	public ResponseEntity<ProductUtil> findById(@PathVariable Long id){
		return service.findByProductId(id);
	}
	
	@PutMapping("/product/{id}/ratting={ratting}")
	public ResponseEntity<Product> updateRatting(@PathVariable Long id, @PathVariable int ratting){
		return service.updateRatting(id,ratting);
	}
	@PostMapping("/products")
	public ResponseEntity<Product> addProduct(Product product){
		return service.addProduct(product);
		
	}
}
