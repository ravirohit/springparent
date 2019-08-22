import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';


declare function printfunc(arg1:Object, arg2:string, arg3:Object[]): any;
declare function clearRecord():any;

export interface Item{
  name: string;
  rate:number;
}
@Component({
  selector: 'app-admincomp',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {

  name:string;
  rate:number;
  itemList=[];
  headerList=['Sr.','CustomerId','Shopping Amount'];
  totalTransaction:number=0;

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService) { }
  ngOnInit() {
    this.httpservice.getApiCall(this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_GET_URL,this);
//    document.getElementById("nameinput").focus();
  }
  callBackOnApi(items) {
    let id = 1;
    //this.itemList = items;
    items.forEach(item => {
      this.totalTransaction = this.totalTransaction + item[2];
      this.itemList.push({id:id,customerId:item[1],shoppingAmount:item[2]});
      printfunc({id:id,customerId:item[1],shoppingAmount:item[2]}, this.getDocHeader(), this.getDocFooter());
      id = id + 1;
      
    });
    console.log("total transaction:"+this.totalTransaction);
    
  }
  getDocHeader(){
    return"Transaction Summary on Date: "+this.getDate();
  }
  getDate(){
    let date = new Date();
    return date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
  }
  getDocFooter(){
    return [{id:'-',customerId:'-',shoppingAmount:'-'},{id:'',customerId:'Total Cost',shoppingAmount:this.totalTransaction}];
  }
  printItem(){
  
  }
  
}
