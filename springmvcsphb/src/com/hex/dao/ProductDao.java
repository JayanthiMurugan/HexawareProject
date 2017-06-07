package com.hex.dao;

import com.hex.vo.Product;
import com.hex.util.HexApplicationException;
import java.util.List;

public interface ProductDao  {

	public Product select(Product object) throws HexApplicationException;

	public void insert(Product object) throws HexApplicationException;

	public void update(Product object) throws HexApplicationException;

	public void deleteAll(List<Product> entries) throws HexApplicationException;

	public java.util.List getAllProduct() throws HexApplicationException;

	public List search(String fieldValue, String columnName)throws HexApplicationException;

	
}
