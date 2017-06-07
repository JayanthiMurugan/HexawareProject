package com.hex.dao;

import com.hex.vo.Product;
import com.hex.util.HexApplicationException;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("productDao")
public class ProductDaoImpl extends HibernateDaoSupport implements ProductDao {

	public void insert(Product object) throws HexApplicationException {
	
		System.out.println("inside insert in DAO");
		try {
			Session session = getHibernateTemplate().getSessionFactory().openSession();
			Transaction transaction = session.beginTransaction();
			session.save(object);
			transaction.commit();
			session.close();
			System.out.println("inside insert in DAO -----> after getHibernateTemplate().save");

		} catch (Exception exception) {
			throw new HexApplicationException ( exception );
		}
	}

	public void deleteAll(List<Product> entries) throws HexApplicationException {
	
		System.out.println("inside deleteAll in DAO");
		try {
			Session session = getHibernateTemplate().getSessionFactory().openSession();
			Transaction transaction = session.beginTransaction();
			for(Product product : entries)
			{
				session.delete(product);
			}
			transaction.commit();
			session.close();
			System.out.println("inside deleteAll in DAO -----> after getHibernateTemplate().deleteAll");
		}
		catch (Exception exception) {
			throw new HexApplicationException ( exception );
		}
	}

	public void update(Product object) throws HexApplicationException {
	
		System.out.println("inside update in DAO");
		try {
			select ( object );
			Session session = getHibernateTemplate().getSessionFactory().openSession();
			Transaction transaction = session.beginTransaction();
			session.update(object);
			transaction.commit();
			session.close();
			System.out.println("inside update in DAO -----> after getHibernateTemplate().update");
		} catch (Exception exception) {
			throw new HexApplicationException ( exception );
		}
	}

	public Product select(Product object) throws HexApplicationException {
	
		System.out.println("inside select in DAO");	
		try {
		
				Product woProductVO = (Product) getHibernateTemplate().getSessionFactory().openSession().load(
				Product.class, object.getProductid());
				System.out.println("inside select in DAO -----> after getHibernateTemplate().select");
			return woProductVO;
		} catch (Exception exception) {
			throw new HexApplicationException ( exception );
		}
	
	}

	public java.util.List getAllProduct() throws HexApplicationException {
		try {
		Session session = getHibernateTemplate().getSessionFactory().openSession();
			String query = "from Product as entity";
			List result = session.createQuery(query).list();
			session.close();	
			System.out.println("inside getAll in DAO -----> after getHibernateTemplate().getAll");			
			return result;
		} catch (Exception exception) {
			throw new HexApplicationException ( exception );
		}
	}

    public List search(String fieldValue, String columnName)
			throws HexApplicationException {
			
			System.out.println("Entering into DAO implementation : " + fieldValue + "***" +columnName );
			
		try {
			 Session session = getHibernateTemplate().getSessionFactory().openSession();
			 Query query = session.createQuery("FROM Product obj WHERE upper(obj." + columnName + ") LIKE '%" + fieldValue.toUpperCase() + "%'");
			 List result = query.list();
			 session.close();
			 System.out.println("inside search in DAO -----> after getHibernateTemplate().search");
			 return result;
			} catch (Exception exception) {
			throw new HexApplicationException ( exception );
		}

	}


}
