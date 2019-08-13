package com.learn.repository;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.learn.model.ItemEntity;
import com.learn.model.ItemEntryReq;

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
				itemEntity.setName(itemReq.getNewName());
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
}
