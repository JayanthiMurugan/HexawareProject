package com.hex.service;

import com.hex.vo.Product;
import java.util.List;
import java.util.ArrayList;
import com.hex.util.HexApplicationException;
import com.hex.dao.ProductDao;

public interface IProduct {

	public void insert(Product object) throws HexApplicationException;

	public void deleteAll(List<Product> object) throws HexApplicationException;

	public void update(Product object) throws HexApplicationException;

	public Object select(Product object) throws HexApplicationException;

	public Object getAllProduct() throws HexApplicationException;

	public List search(String fieldValue, String columnName) throws HexApplicationException;

	
}
