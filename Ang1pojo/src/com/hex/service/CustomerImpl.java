package com.hex.service;

import java.util.List;
import com.hex.vo.Customer;
import com.hex.dao.CustomerDao;
import com.hex.dao.CustomerDaoImpl;
import com.hex.util.HexApplicationException;

public class CustomerImpl implements ICustomer {
	
	CustomerDao customerDao = null;
	
	public CustomerImpl() {

		customerDao = new CustomerDaoImpl();

	}

	public void insert(Customer object) throws HexApplicationException {
	
		System.out.println("inside insert in Service ");			
		customerDao.insert(object);
		
	}


	public void deleteAll(java.util.List entries) throws HexApplicationException {
	
		System.out.println("inside deleteAll in Service ");		
		customerDao.deleteAll(entries);
	
	}

	public void update(Customer object) throws HexApplicationException {
	
		System.out.println("inside update in Service ");	
		customerDao.update(object);
	
	}


	public Object getAllCustomer() throws HexApplicationException {
	
		System.out.println("inside getAllCustomer in Service ");	
		return customerDao.getAllCustomer();
	
	}


	public List search(String fieldValue, String columnName) throws HexApplicationException {

	System.out.println("Entering into service implementation : " + fieldValue + "***" +columnName );
				
		return customerDao.search(fieldValue, columnName);
	
	}


}
