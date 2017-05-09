package com.hex.dao;

import com.hex.vo.Customer;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Hibernate;
import org.springframework.dao.support.DataAccessUtils;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.orm.hibernate3.HibernateObjectRetrievalFailureException;
import org.springframework.orm.ObjectRetrievalFailureException;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.sql.SQLException;
import com.hex.util.HexApplicationException;

public class CustomerDaoImpl extends HibernateDaoSupport implements CustomerDao {

	public void insert(Customer object) throws HexApplicationException {
	
		System.out.println("inside insert in DAO");
		try {
			getHibernateTemplate().save(object);
	System.out.println("inside insert in DAO -----> after getHibernateTemplate().save");

		} catch (DataIntegrityViolationException dataIntegrityViolationException) {
System.out.println("inside insert in DAO ----> catch (DataIntegrityViolationException )");

			throw new HexApplicationException(HexApplicationException.DATA_INTEGRITY_EXCEPTION, dataIntegrityViolationException);
		} catch (DataAccessException dataAccessException) {
System.out.println("inside insert in DAO -----> catch (DataAccessException ) ");

			throw new HexApplicationException(dataAccessException);
		}
	}

	public void delete(Customer object) throws HexApplicationException {
	
		System.out.println("inside delete in DAO");
		try {
			getHibernateTemplate().delete(object);
		}
		catch ( DataAccessException dataAccessException ) {
			throw new HexApplicationException ( dataAccessException );
		}
	}

	public void deleteAll(java.util.Collection entries) throws HexApplicationException {
	
		System.out.println("inside deleteAll in DAO");
		try {
			getHibernateTemplate().deleteAll(entries);
		}
		catch ( DataAccessException dataAccessException ) {
			throw new HexApplicationException ( dataAccessException );
		}
	}

	public void update(Customer object) throws HexApplicationException {
	
		System.out.println("inside update in DAO");
		try {
			select ( object );
			getHibernateTemplate().update(object);
		} catch (DataIntegrityViolationException dataIntegrityViolationException) {
		    throw new HexApplicationException(HexApplicationException.DATA_INTEGRITY_EXCEPTION, dataIntegrityViolationException);
		} catch (DataAccessException dataAccessException) {
		    throw new HexApplicationException(dataAccessException);
		}
	}

	public Customer select(Customer object) throws HexApplicationException {
	
		System.out.println("inside select in DAO");	
		try {
			Customer woCustomerVO = (Customer) getHibernateTemplate().load(
				Customer.class, object.getCustomerid());
			return woCustomerVO;
		} catch (HibernateObjectRetrievalFailureException exception) {
		    exception.printStackTrace();
		    throw new HexApplicationException(HexApplicationException.RECORD_NOT_FOUND_EXCEPTION);
		} catch (DataAccessException dataAccessException) {
		    dataAccessException.printStackTrace();
		    throw new HexApplicationException(dataAccessException);
		}
	
	}

	public java.util.List getAllCustomer() throws HexApplicationException {
		try {
			return getHibernateTemplate().find("from Customer"); 
		} catch (HibernateObjectRetrievalFailureException exception) {
		    exception.printStackTrace();
		    throw new HexApplicationException(HexApplicationException.RECORD_NOT_FOUND_EXCEPTION);
		} catch (DataAccessException dataAccessException) {
		    throw new HexApplicationException(dataAccessException);
		}
	}

	public java.util.List getAllCustomer(final int startRecord, final int endRecord) throws HexApplicationException {
		try {
			return getHibernateTemplate().executeFind(new HibernateCallback(){
				public Object doInHibernate(Session session) throws HibernateException, SQLException {
					Query query = session.createQuery("from Customer");
					query.setFirstResult(startRecord);
					query.setMaxResults(endRecord);
					List list = query.list();
					return list;
				}
			});
			}
		catch ( HibernateException hibernateException ) {
			throw new HexApplicationException ( hibernateException );
		}		
	}
	public int getCustomerCount() throws HexApplicationException {
		try {
			class ReturnValue  {
				Integer value;
			}
			final ReturnValue rv = new ReturnValue();
			getHibernateTemplate().execute(new HibernateCallback(){
				public Object doInHibernate(Session session) throws HibernateException, SQLException {
					rv.value = 
						((Integer) session.createQuery("select count(*) from Customer").uniqueResult());
					return null;
				}
			});
			return rv.value.intValue();
		}
		catch ( DataAccessException dataAccessException ) {
			throw new HexApplicationException ( dataAccessException );
		}
    }


    public List search(String fieldValue, String columnName)
			throws HexApplicationException {

			System.out.println("Entering into DAO implementation : " + fieldValue + "***" +columnName );
		
		try {
			return getHibernateTemplate().find(		
					"FROM Customer obj WHERE upper(obj." + columnName + ") LIKE '%" + fieldValue.toUpperCase() + "%'");

		} catch (DataAccessException dataAccessException) {
			throw new HexApplicationException(dataAccessException);
		}

	}


}
