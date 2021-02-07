package com.example.demo.controller;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.dao.ProductSearch;
import com.example.demo.entities.Product;
import com.sipios.springsearch.anotation.SearchSpec;

@Controller
public class SearchController {
    private ProductSearch productSearch;

    public SearchController(ProductSearch productSearch) {
        this.productSearch = productSearch;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/findproducts")
    public ResponseEntity<List<Product>> searchForCars(@SearchSpec Specification<Product> specs) {
        return new ResponseEntity<>(productSearch.findAll(Specification.where(specs)), HttpStatus.OK);
    }
    //http://localhost:9090/findproducts?search=(tags:'Cleansing') AND (price>5000)
    //(tags:'*Clean*')
    //(tags:(a OR b)AND C)
}