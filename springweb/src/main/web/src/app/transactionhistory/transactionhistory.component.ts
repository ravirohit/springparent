import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CommonutilService} from '../service/commonutil.service'
import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';


declare function printfunc(arg1:Object, arg2:string, arg3:Object[]): any;
declare function clearRecord():any;


@Component({
  selector: 'app-admincomp',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit, AfterViewInit  {

  startDate;
  endDate;
  itemList=[];
  headerList= [];
  totalTransaction:number=0;
  isDetailTransactionInfo=false;  
  transactionBriefDetail=[];   // to have a backup while coming back after seeing  particular customer details..
  tatalSummaryTransactionbckup = 0;

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService, 
              private util:CommonutilService) { 
            
  }
  ngAfterViewInit() {
    clearRecord();
    let url = this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_GET_URL;
    let sdate= this.util.getDateStringToSendBackEnd(null); // today date;
    url += "?sdate="+sdate;
    this.httpservice.getApiCall(url,this);
  }
  ngOnInit() {
    
  }
  callBackOnApi(items) {
    let srNum = 1;
    this.itemList = [];
    clearRecord();
    items.forEach(item => {
      this.totalTransaction = this.totalTransaction + item.totalShoppingAmount;
      let dateToDisplay = this.util.getDateInStringForView(item.shoppingTime);
      item.srNum = srNum;
      item.dateToDisplay = dateToDisplay;
      let ele={srNum:srNum,customerId:item.customerId,dateToDisplay:item.dateToDisplay,totalShoppingAmount:item.totalShoppingAmount}
      printfunc(ele,this.getDocHeader(),this.getDocFooter());
      srNum = srNum + 1;
      
    });
    this.headerList = ['Sr.','CustomerId', 'Date and Time','Shopping Amount'];
    this.transactionBriefDetail = items;   // creating backup because after seeing the detail under one transaction and again coming back is needed
    this.tatalSummaryTransactionbckup = this.totalTransaction;
    this.itemList = this.transactionBriefDetail;
    
  }
  onDetailTableHeaderClick(){
    clearRecord();   // from print function of js
    this.isDetailTransactionInfo = false;
    this.headerList = ['Sr.','CustomerId', 'Date and Time','Shopping Amount'];
    this.itemList = this.transactionBriefDetail;
    this.totalTransaction=this.tatalSummaryTransactionbckup;
  }
  getDocHeader(){
    return"Transaction summary report time: "+this.util.getDateInStringForView(new Date());
  }
  getDocFooter(){
    return [{srNum:'-',customerId:'-',dateToDisplay:'-',totalShoppingAmount:'-'},{srNum:'',customerId:'Total Cost',dateToDisplay:'',totalShoppingAmount:this.totalTransaction}];
  }
  fetchTransactionHistory(){
    this.isDetailTransactionInfo=false;  
    let sdate:string = null, edate:string = null, url:string, queryParam:string="?";
    url = this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_GET_URL;
    this.startDate = this.startDate == "" ? null : this.startDate;
    this.endDate = this.endDate == "" ? null : this.endDate;
    if((this.startDate == null) && (this.endDate != null)){
      return;
    }
    if(this.startDate == null){
      sdate= this.util.getDateStringToSendBackEnd(null);
    } else {
      sdate= this.util.getDateStringToSendBackEnd(this.startDate);
    }
    queryParam += "sdate="+sdate;
    if((this.endDate == null) && (this.startDate != null)){
      edate = this.util.getPlustOneDateStringToSendBackEnd(this.startDate);
    }
    if(this.endDate != null) {
      edate= this.util.getPlustOneDateStringToSendBackEnd(this.endDate);  
    } 
    queryParam += "&edate="+edate;
    url = this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_GET_URL + queryParam;
    this.httpservice.getApiCall(url,this);
  }
  onTableRowClick(item){
    console.log("on row click:", item);
    clearRecord();
    this.isDetailTransactionInfo  = true;
    this.headerList = ['Sr.','Item Name', 'Quantity','Rate','cost']
    let itemDetailInfo = item.customerShoppingList;
    let itemDetailInfoList = [];
    let srNum = 1;
    this.itemList = [];
    this.totalTransaction = 0;
    clearRecord();
    itemDetailInfo.forEach(detailItem => {
      item.srNum = srNum;
      this.totalTransaction += detailItem.cost;
      let ele = {srNum:srNum,itemName:detailItem.name,quantity:detailItem.quantity,rate:detailItem.rate,cost:detailItem.cost};
      printfunc(ele,this.getDocHeader(),this.getDocForOneCustomerFooter());
      itemDetailInfoList.push(ele);
      srNum = srNum + 1;
      
    });
    this.itemList = itemDetailInfoList;
  }
  getDocForOneCustomerFooter(){
    return [{srNum:'-',itemName:'-',quantity:'-',rate:'-',cost:'-'},{srNum:'',itemName:'Total Cost',quantity:'',rate:'',cost:this.totalTransaction}];
  }
  printItem(){
   
  }
  
}



