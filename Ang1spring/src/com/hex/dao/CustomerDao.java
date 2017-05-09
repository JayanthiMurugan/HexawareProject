package com.hex.dao;

import com.hex.vo.Customer;
import com.hex.util.HexApplicationException;
import java.util.List;

public interface CustomerDao  {

	public Customer select(Customer object) throws HexApplicationException;

	public void insert(Customer object) throws HexApplicationException;

	public void update(Customer object) throws HexApplicationException;

	public void delete(Customer object) throws HexApplicationException;

	public void deleteAll(java.util.Collection entries) throws HexApplicationException;

	public java.util.List getAllCustomer() throws HexApplicationException;

	public java.util.List getAllCustomer( int startRecord, int endRecord ) throws HexApplicationException;

	public int getCustomerCount() throws HexApplicationException;

	public List search(String fieldValue, String columnName)throws HexApplicationException;

	
}
