package com.learn.util;

import java.text.SimpleDateFormat;
import java.util.Date;

// "yyyy-MM-dd hh:mm:ss"  format to db but it is in 12 hour format
// "yyyy-MM-dd HH:mm:ss"   format the date in 24 hour date format
public class DateUtil {
	
	public static String getDateInStringFormat(){
		Date date = new Date(System.currentTimeMillis() - 24*60*60*1000);
		System.out.println("Date is:"+date);
		SimpleDateFormat format= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  // this format is used by mysql db
		String dateStr = format.format(date);
		System.out.println("String date is: "+dateStr);
		return dateStr;
	}

}
