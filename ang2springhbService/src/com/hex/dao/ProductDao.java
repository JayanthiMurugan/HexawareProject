package com.hex.dao;

import com.hex.vo.Product;
import com.hex.util.HexApplicationException;
import java.util.List;

public interface ProductDao  {

	public Product select(Product object) throws HexApplicationException;

	public void insert(Product object) throws HexApplicationException;

	public void update(Product object) throws HexApplicationException;

	public void delete(Product object) throws HexApplicationException;

	public void deleteAll(java.util.Collection entries) throws HexApplicationException;

	public java.util.List getAllProduct() throws HexApplicationException;

	public java.util.List getAllProduct( int startRecord, int endRecord ) throws HexApplicationException;

	public int getProductCount() throws HexApplicationException;

	public List search(String fieldValue, String columnName)throws HexApplicationException;

	
}
