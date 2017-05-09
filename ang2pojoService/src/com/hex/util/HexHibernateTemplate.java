package com.hex.util;

import org.hibernate.*;
import org.hibernate.cfg.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Collection;
public class HexHibernateTemplate {

	public static void save ( Object entity ) throws HexApplicationException{
		try
		{
			Session session = HibernateUtil.getSessionFactory().openSession();
			Transaction transaction = session.beginTransaction();
			session.save(entity);
			transaction.commit();		
			HibernateUtil.getSessionFactory().close();
		}
		catch (Exception exception)
		{
			throw new HexApplicationException("DB exception", exception);
		}
	}


	public static void update ( Object entity ) {
		try
		{
			Session session = HibernateUtil.getSessionFactory().openSession();
			Transaction transaction = session.beginTransaction();
			session.update(entity);
			transaction.commit();		
			HibernateUtil.getSessionFactory().close();
		}
		catch (Exception exception)
		{
			exception.printStackTrace();
		}
	}

	public static void delete ( Object entity ) {
		try
		{
			Session session = HibernateUtil.getSessionFactory().openSession();
			Transaction transaction = session.beginTransaction();
			session.delete(entity);
			transaction.commit();		
			HibernateUtil.getSessionFactory().close();
		}
		catch (Exception exception)
		{
			exception.printStackTrace();
		}
	}

	public static void deleteAll ( Collection collections ) {
		try
		{
			Session session = HibernateUtil.getSessionFactory().openSession();
			Transaction transaction = session.beginTransaction();
			for(Iterator iterator = collections.iterator();iterator.hasNext(); )
				session.delete(iterator.next());
			transaction.commit();	
			HibernateUtil.getSessionFactory().close();
		}
		catch (Exception exception)
		{
			exception.printStackTrace();
		}
	}

	public static Object load ( Class clazz, Object serializableId ) {
		try
		{
			Session session = HibernateUtil.getSessionFactory().openSession();
			Object result = session.load( clazz, (java.io.Serializable) serializableId);
			HibernateUtil.getSessionFactory().close();
			return result;
		}
		catch (Exception exception)
		{
			exception.printStackTrace();
		}
		return null;
	}

	public static List find ( String hqlQuery ) {
		try
		{
			Session session = HibernateUtil.getSessionFactory().openSession();
			List result = session.createQuery( hqlQuery ).list();
			HibernateUtil.getSessionFactory().close();
			return result;
		}
		catch (Exception exception)
		{
			exception.printStackTrace();
		}
		return null;
	}

	public static List find ( String hqlQuery, int startRecord, int endRecord ) {
		try
		{
			Session session = HibernateUtil.getSessionFactory().openSession();
			Query query = session.createQuery( hqlQuery );
			query.setFirstResult(startRecord);
			query.setMaxResults(endRecord);
			List result = query.list();
			HibernateUtil.getSessionFactory().close();
			return result;
		}
		catch (Exception exception)
		{
			exception.printStackTrace();
		}
		return null;
	}

	public static int count ( String objectName ) {
		try
		{
			System.out.println("inside Count in HexHibernateTemplate ");
			//Session session = HibernateUtil.getSessionFactory().getCurrentSession();
			Session session = HibernateUtil.getSessionFactory().openSession();
			Integer count = ((Integer) session.createQuery( "select count(*) from " + objectName ).uniqueResult());
			HibernateUtil.getSessionFactory().close();
			return count.intValue();
		}
		catch (Exception exception)
		{
			exception.printStackTrace();
		}
		return 0;
	}

	public static java.util.List getRecords(String sqlQuery, String keyColumn, String valueColumn) throws HexApplicationException {
		try {
			 ArrayList list = new ArrayList();
			 //Session session = HibernateUtil.getSessionFactory().getCurrentSession();
			 Session session = HibernateUtil.getSessionFactory().openSession();
		         Iterator results = session.createSQLQuery(sqlQuery)
		                        .addScalar(keyColumn, Hibernate.STRING)
		                        .addScalar(valueColumn, Hibernate.STRING)
		                        .list().iterator();
			 while ( results.hasNext() ) {
				Object[] row = (Object[]) results.next();
				list.add ( row );
		     }
             return list;
		}catch(Exception exception) {
			    throw new HexApplicationException( exception );
		}
	}

}
