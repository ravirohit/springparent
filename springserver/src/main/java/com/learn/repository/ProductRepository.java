package com.learn.repository;

import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.learn.model.CustomerShoppingSummary;
import com.learn.model.ItemEntity;
import com.learn.model.ItemEntryReq;
import com.learn.util.DateUtil;

@Repository
@Transactional
public class ProductRepository {

	@Autowired
    private SessionFactory sessionFactory;
	
	public boolean saveOrUpdateItem(List<ItemEntity> newItemList, List<ItemEntryReq> oldItemList){
		int batchSize = 0;
		try{
			Session session = sessionFactory.getCurrentSession();
			for(ItemEntity itemEntity: newItemList){   // store new product info in db
				session.save(itemEntity);
				batchSize++;
				if(batchSize == 20){
					batchSize = 0;
					session.flush();
					session.clear();
				}
			}
			session.flush();
			session.clear();
			batchSize = 0;
			for(ItemEntryReq itemReq:oldItemList){
				Criteria c2 = session.createCriteria(ItemEntity.class);
				c2.add(Restrictions.eq("name", itemReq.getOldName()));
				ItemEntity itemEntity = (ItemEntity) c2.list().get(0);
				if((itemReq.getNewName() != null) && (itemReq.getNewName() != "")){
					itemEntity.setName(itemReq.getNewName());
				}
				itemEntity.setRate(itemReq.getRate());
				batchSize++;
				if(batchSize == 20){
					batchSize = 0;
					session.flush();
					session.clear();
				}
			}
			session.flush();
			session.clear();
			batchSize = 0;
		}catch(Exception e){
			System.out.println("Exception occur while saving product info:"+e);
			return false;
		}
		return true;
	}
	public List<ItemEntity> getProductList(){
		List<ItemEntity> itemList = null;
		String str = "From ItemEntity";
		try{
			Query query = sessionFactory.getCurrentSession().createQuery(str);
			itemList = query.list();
			if(itemList != null){
				System.out.println("product count:"+itemList.size());
			}
		}catch(Exception e){
			System.out.println("exception occur while fetching product info from db:"+e);
			return null;
		}
		return itemList;
	}
	public boolean saveCustomerShoppingSummary(CustomerShoppingSummary customerShoppingSummary){
		try{
			Session session = sessionFactory.getCurrentSession();
			session.save(customerShoppingSummary);
		}catch(Exception e){
			return false;
		}
		return true;
	}
	public List<CustomerShoppingSummary> getShoppingSummary(String sdate, String edate){
		StringBuffer str = new StringBuffer("SELECT * FROM customershoppingsummary a");
		List<CustomerShoppingSummary> summaryList = null;
		//String date = DateUtil.getDateInStringFormat();
		if(sdate != null){
			str.append(" where a.shoppingTime > '"+sdate+"'");
		}
		if(edate != null){
			str.append(" and a.shoppingTime < '"+edate+"'");
		}
		str.append("  order by shoppingTime desc");
		String strQuery = str.toString();
		try{
			Session session = sessionFactory.getCurrentSession();
			Query query = session.createSQLQuery(strQuery);
			summaryList = query.list();
			System.out.println("record fetch:"+summaryList);
		}catch(Exception e){
			System.out.println("Exception while fethcing last 24 hour record:"+e);
			return summaryList;
		}
		return summaryList;
	}
}
