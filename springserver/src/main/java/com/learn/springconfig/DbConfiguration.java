package com.learn.springconfig;

import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.learn.model.ItemEntity;
//import com.learn.repository.User;
import com.learn.springsecurity.config.CustomUser;
import com.learn.springsecurity.config.Role;



// https://www.boraji.com/spring-4-hibernate-5-integration-example-with-zero-xml
//https://www.baeldung.com/hibernate-4-spring
@Configuration
@PropertySource("classpath:db_connection.properties")
@EnableTransactionManagement
@ComponentScans(value = { 
      @ComponentScan("com.learn")
    })
public class DbConfiguration {

   @Autowired
   private Environment env;

   @Bean
   public DataSource getDataSource() {
      BasicDataSource dataSource = new BasicDataSource();
      dataSource.setDriverClassName(env.getProperty("db.driver"));
      dataSource.setUrl(env.getProperty("db.url"));
      dataSource.setUsername(env.getProperty("db.username"));
      dataSource.setPassword(env.getProperty("db.password"));
      return dataSource;
   }

   @Bean
   public LocalSessionFactoryBean getSessionFactory() {
      LocalSessionFactoryBean factoryBean = new LocalSessionFactoryBean();
      factoryBean.setDataSource(getDataSource());
      
      Properties props=new Properties();
      props.put("hibernate.show_sql", env.getProperty("hibernate.show_sql"));
      props.put("hibernate.hbm2ddl.auto", env.getProperty("hibernate.hbm2ddl.auto"));
      props.put("hibernate.jdbc.batch_size", env.getProperty("hibernate.jdbc.batch_size"));

      factoryBean.setHibernateProperties(props);
      factoryBean.setAnnotatedClasses(CustomUser.class,Role.class,ItemEntity.class);
      //factoryBean.setAnnotatedPackages("com.learn");
      return factoryBean;
   }

   @Bean
   public HibernateTransactionManager getTransactionManager() {
      HibernateTransactionManager transactionManager = new HibernateTransactionManager();
      transactionManager.setSessionFactory(getSessionFactory().getObject());
      return transactionManager;
   }
}


