package com.hex.dao;

import com.hex.vo.Customer;

import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.sql.SQLException;
import com.hex.util.HexApplicationException;
import com.hex.util.HexHibernateTemplate;

public class CustomerDaoImpl implements CustomerDao {

	public void insert(Customer object) throws HexApplicationException {
	
		System.out.println("inside insert in DAO");
		try {
			HexHibernateTemplate.save(object);
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}

	}

	public void delete(Customer object) throws HexApplicationException {
	
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

	public void update(Customer object) throws HexApplicationException {
	
		System.out.println("inside update in DAO");
		try {
			HexHibernateTemplate.update(object);
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}
	}

	public Customer select(Customer object) throws HexApplicationException {
	
		System.out.println("inside select in DAO");	
		try {
			Customer woCustomerVO = (Customer) HexHibernateTemplate.load(
				Customer.class, object.getCustomerid());
			return woCustomerVO;
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}
		/*catch ( ObjectRetrievalFailureException poORFE) {
			throw new HexApplicationException ( poORFE );
		}*/		
	}

	public java.util.List getAllCustomer() throws HexApplicationException {
		try {
			return HexHibernateTemplate.find("from Customer as Customer"); 
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}
	}

	public java.util.List getAllCustomer(final int startRecord, final int endRecord) throws HexApplicationException {
		try {
			return HexHibernateTemplate.find("from Customer as Customer", startRecord, endRecord); 
		}
		catch ( Exception exception ) {
			throw new HexApplicationException ( exception );
		}		
	}
	public int getCustomerCount() throws HexApplicationException {
		try {
			System.out.println("inside getCustomerCount in DaoImpl");
			return HexHibernateTemplate.count("Customer");
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
					"FROM Customer obj WHERE upper(obj." + columnName + ") LIKE '" + fieldValue.toUpperCase() + "%'");

		} catch (Exception poDAE) {
			throw new HexApplicationException(poDAE);
		}

	}


}
