package com.hex.service;

import java.util.List;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import org.springframework.context.ApplicationContext;

import com.hex.vo.Product;
import com.hex.dao.ProductDao;
import com.hex.util.BootStrapper;
import com.hex.util.HexApplicationException;

@Path(value = "/ws")
public class RestService{

	IProduct product;

	public RestService() {
		ApplicationContext applicationContext = BootStrapper.getService();	
		product = (IProduct) applicationContext.getBean("Product");
		
	}

	@POST
	@Path(value = "/save")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String insert(Product object) throws HexApplicationException{
		try {
			System.out.println("inside insert service method..");
			product.insert(object);
			return "Inserted successfully in Service";
		} catch (HexApplicationException e) {
			e.printStackTrace();
			return e.getMessage();
		}
	}

	@GET
	@Path(value = "/list")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Product> getAllProduct() throws HexApplicationException {
		System.out.println("inside getAllObject service method..");
		try {
			List<Product> productlist =(List<Product>) product.getAllProduct();
			System.out.println("list-->" + productlist);
			return productlist;
		} catch (HexApplicationException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw new HexApplicationException(e);
		}
	}

	@POST
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String deleteAll(List<Product> object) throws HexApplicationException{
		System.out.println("inside deleteAll service method..");
		try {
			product.deleteAll(object);
			return "Deleted successfully in Service";
		} catch (HexApplicationException e) {
			e.printStackTrace();
			return e.getMessage();
		}
	}
	
	@POST
	@Path(value = "/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String update(Product object) throws HexApplicationException{
		System.out.println("Inside update service method");
		try {
			product.update(object);
			return "Update Successfully in Service";
		} catch (HexApplicationException e) {
			e.printStackTrace();
			return e.getMessage();
		}
	}
	
	@GET
	@Path(value = "/search")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Product> search(@QueryParam("searchValue") String searchValue, @QueryParam("searchColumn") String searchColumn) throws HexApplicationException{
		System.out.println("inside search method");
		try {
			if(searchValue == null || searchColumn == null)
				throw new Exception("Input cannot be null");
			List<Product>object = product.search(searchValue, searchColumn);
			return object;
		} catch (HexApplicationException e) {
			e.printStackTrace();
			throw e;
		} catch (Exception e) {
			e.printStackTrace();
			throw new HexApplicationException(e);
		}
		
	}
}
