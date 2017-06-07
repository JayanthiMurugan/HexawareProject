package com.hex.dao;

import com.hex.vo.Product;

import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.sql.SQLException;
import com.hex.util.HexApplicationException;
import com.hex.util.HexHibernateTemplate;

public class ProductDaoImpl implements ProductDao {

	public void insert(Product object) throws HexApplicationException {
	
		System.out.println("inside insert in DAO");
		try {
			HexHibernateTemplate.save(object);
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}

	}

	public void delete(Product object) throws HexApplicationException {
	
		System.out.println("inside delete in DAO");
		try {
			HexHibernateTemplate.delete(object);
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}
	}

	public void deleteAll(java.util.Collection entries) throws HexApplicationException {
	
		System.out.println("inside deleteAll in DAO");
		try {
			HexHibernateTemplate.deleteAll(entries);
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}
	}

	public void update(Product object) throws HexApplicationException {
	
		System.out.println("inside update in DAO");
		try {
			HexHibernateTemplate.update(object);
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}
	}

	public Product select(Product object) throws HexApplicationException {
	
		System.out.println("inside select in DAO");	
		try {
			Product woProductVO = (Product) HexHibernateTemplate.load(
				Product.class, object.getProductid());
			return woProductVO;
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}
		/*catch ( ObjectRetrievalFailureException poORFE) {
			throw new HexApplicationException ( poORFE );
		}*/		
	}

	public java.util.List getAllProduct() throws HexApplicationException {
		try {
			return HexHibernateTemplate.find("from Product as Product"); 
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}
	}

	public java.util.List getAllProduct(final int startRecord, final int endRecord) throws HexApplicationException {
		try {
			return HexHibernateTemplate.find("from Product as Product", startRecord, endRecord); 
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}		
	}
	public int getProductCount() throws HexApplicationException {
		try {
			System.out.println("inside getProductCount in DaoImpl");
			return HexHibernateTemplate.count("Product");
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}
	}

    public List search(String fieldValue, String columnName)
			throws HexApplicationException {

			System.out.println("Entering into DAO implementation : " + fieldValue + "***" +columnName );
		
		try {
			return HexHibernateTemplate.find(		
					"FROM Product obj WHERE upper(obj." + columnName + ") LIKE '" + fieldValue.toUpperCase() + "%'");

		} catch (Exception poDAE) {
			throw new HexApplicationException(poDAE);
		}

	}


}
