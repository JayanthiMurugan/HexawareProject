package com.hex.service;

import com.hex.vo.Product;
import com.hex.dao.ProductDao;
import com.hex.util.HexApplicationException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component("productService")
public class ProductImpl implements IProduct {
	
	@Autowired
	@Qualifier("productDao")
	private ProductDao productDao;

	public void insert(Product object) throws HexApplicationException {
	
		System.out.println("inside insert in Service ");			
		productDao.insert(object);
		
	}

	public void deleteAll(List<Product> object) throws HexApplicationException {
	
		System.out.println("inside deleteAll in Service ");		
		productDao.deleteAll(object);
	
	}

	public void update(Product object) throws HexApplicationException {
	
		System.out.println("inside update in Service ");	
		productDao.update(object);
	
	}

	public Object select(Product object) throws HexApplicationException {
	
		System.out.println("inside select in Service ");	
		return productDao.select(object);
	
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
