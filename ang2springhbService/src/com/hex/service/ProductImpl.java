package com.hex.service;

import com.hex.vo.Product;
import com.hex.dao.ProductDao;
import com.hex.util.BootStrapper;
import org.springframework.context.ApplicationContext;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import com.hex.util.HexApplicationException;

public class ProductImpl implements IProduct {
	
	private ProductDao productDao;

	public void setProductDao ( ProductDao productDao ) {
		this.productDao = productDao;
	}
	
	public ProductDao getProductDao () {
		return productDao;
	}

	public void insert(Product object) throws HexApplicationException {
	
		System.out.println("inside insert in Service ");			
		productDao.insert(object);
		
	}


	public void deleteAll(java.util.List entries) throws HexApplicationException {
	
		System.out.println("inside deleteAll in Service ");		
		productDao.deleteAll(entries);
	
	}

	public void update(Product object) throws HexApplicationException {
	
		System.out.println("inside update in Service ");	
		productDao.update(object);
	
	}


	public Object getAllProduct() throws HexApplicationException {
	
		System.out.println("inside getAllProduct in Service ");	
		return productDao.getAllProduct();
	
	}


	public List search(String fieldValue, String columnName) throws HexApplicationException {

	System.out.println("Entering into service implementation : " + fieldValue + "***" +columnName );
				
		return productDao.search(fieldValue, columnName);
	
	}


}
