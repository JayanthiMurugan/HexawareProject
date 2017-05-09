package com.hex.service;

import com.hex.vo.Customer;
import java.util.List;
import java.util.ArrayList;
import com.hex.util.HexApplicationException;
import com.hex.dao.CustomerDao;

public interface ICustomer {
	
	public void insert(Customer object) throws HexApplicationException;

	public void deleteAll(java.util.List<Customer> entries) throws HexApplicationException;

	public void update(Customer object) throws HexApplicationException;

	public Object getAllCustomer() throws HexApplicationException;

	public List search(String fieldValue, String columnName) throws HexApplicationException;

	
}
