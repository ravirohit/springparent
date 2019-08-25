import { Component, OnInit } from '@angular/core';
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
export class TransactionhistoryComponent implements OnInit {

  startDate;
  endDate;
  itemList=[];
  headerList=['Sr.','CustomerId', 'Date and Time','Shopping Amount'];
  totalTransaction:number=0;

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService, private util:CommonutilService) { }
  ngOnInit() {
    clearRecord();
    let url = this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_GET_URL;
    let sdate= this.util.getDateStringToSendBackEnd(null); // today date;
    url += "?sdate="+sdate;
    this.httpservice.getApiCall(url,this);
  }
  callBackOnApi(items) {
    let id = 1;
    this.itemList = [];
    clearRecord();
    items.forEach(item => {
      this.totalTransaction = this.totalTransaction + item[2];
      let dateToDisplay = this.util.getDateInStringForView(item[3]);
      this.itemList.push({id:id,customerId:item[1],shoppingAmount:item[2],dateTime:dateToDisplay});
      printfunc({id:id,customerId:item[1],shoppingAmount:item[2],dateTime:dateToDisplay}, this.getDocHeader(), this.getDocFooter());
      id = id + 1;
      
    });
  }
  getDocHeader(){
    return"Transaction summary report time: "+this.util.getDateInStringForView(new Date());
  }
  getDocFooter(){
    return [{id:'-',customerId:'-',shoppingAmount:'-',dateTime:'-'},{id:'',customerId:'Total Cost',shoppingAmount:this.totalTransaction,dateTime:''}];
  }
  fetchTransactionHistory(){
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
    console.log("url:"+url);
    this.httpservice.getApiCall(url,this);
  }
  printItem(){
  
  }
  
}


