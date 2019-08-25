import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';
import {SharedInfoContainerService} from '../service/shared-info-container.service';
import {CommonDataContainerService} from '../service/common-data-container.service'


declare function printfunc(arg1:Object, arg2:string, arg3:Object[]): any;
declare function removeItemFromPrintList(arg1:number,arg2:Object[]):any;
declare function updateRecord(arg1:number,arg2:number,arg3:number):any;
declare function clearRecord():any;

export interface Item{
  name: string;
  rate:number;
}
@Component({
  selector: 'app-createtransaccomp',
  templateUrl: './createtransaccomp.component.html',
  styleUrls: ['./createtransaccomp.component.css']
})
export class CreatetransaccompComponent implements OnInit {

  customerID:string;
  //name:string; 
  itemBarcode:string;
  quantity:number;
  rate:number;
  itemBarKeyMapItem=new Map();   // to keep track of added item in table
  disableFlag:boolean = true;
  id:number = 0;
  itemList = [];
  totalSum:number = 0;
  headerList = ['Sr.','Name','Quantity','Rate', 'Cost','Action'];

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService, 
              private sharedInfo:SharedInfoContainerService, private dataContainer:CommonDataContainerService) { }

  ngOnInit(){
    clearRecord();
    if(this.dataContainer.getMappedObjectIdToItem()){
      console.log("itemList already fetched from backend");
      return ;
    }
    this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL,this);
    document.getElementById("customerID").focus();
  }            
  callBackOnApi(items, isPostApiCall) {
    if(isPostApiCall){
      console.log("call back method after post api call");
      return;
    }else {
      console.log("items stored in the inventory:",items);
      let itemMapToId= new Map();
      items.forEach(el => {
        itemMapToId.set(el.barCode,el);
      });
      this.dataContainer.setMappedObjectIdToItem(itemMapToId);
    }
  }
  
  onEnterBarcode(){
    if((this.itemBarcode == undefined) && (this.quantity == undefined)){
      document.getElementById("itemBarcode").focus();
      return;
    }
    this.quantity = 1;
    let item = this.dataContainer.getItem(this.itemBarcode);
    if(item == null){
      this.disableFlag = false;
    }
    document.getElementById("quantity").focus();
  }
  onQuantityChange(){
    let item = this.dataContainer.getItem(this.itemBarcode);
    if(item == null){
      document.getElementById("rate").focus();
      return;
    }
    let addedItem = this.itemBarKeyMapItem.get(this.itemBarcode);
    if(addedItem) {
        addedItem.quantity += this.quantity;   // how many item of same kind getting entered
        addedItem.cost = addedItem.quantity * addedItem.rate;
        this.totalSum += this.quantity * addedItem.rate;   // only raise with amount getting added in this call;
        updateRecord(addedItem.id, addedItem.quantity, addedItem.cost);
        this.itemBarcode=undefined;
        document.getElementById("itemBarcode").focus();
    }
    else {
      this.id = this.id +1;
      let cost = this.quantity * item.rate;
      let itemTemp={id:this.id,name:item.name,quantity:this.quantity,rate:item.rate,cost:cost,remove:'Remove'};
      this.itemList.push(itemTemp);
      this.itemBarKeyMapItem.set(this.itemBarcode,itemTemp);
      this.totalSum = this.totalSum + cost;
      printfunc({id:this.id,name:item.name,quantity:this.quantity,rate:item.rate,cost:cost}, this.getDocHeader(), this.getDocFooter());

      this.itemBarcode=undefined;
      this.quantity=undefined;
      document.getElementById("itemBarcode").focus();
    }
  }
  onEnterRate(){
    this.id = this.id +1;
    let cost = this.quantity * this.rate;
    let itemTemp={id:this.id,name:this.itemBarcode,quantity:this.quantity,rate:this.rate,cost:cost,remove:'Remove'};
    this.itemList.push(itemTemp);
    this.totalSum = this.totalSum + cost;
    printfunc({id:this.id,name:this.itemBarcode,quantity:this.quantity,rate:this.rate,cost:cost}, this.getDocHeader(), this.getDocFooter());

    this.itemBarcode=undefined;
    this.quantity=undefined;
    this.rate=undefined;
    this.disableFlag=true;
    document.getElementById("itemBarcode").focus();
  }
  
  clearItem(){
    this.itemList = [];
    this.customerID = undefined;
    this.totalSum = 0;
    this.id = 0;
    this.itemBarKeyMapItem.clear();
    clearRecord();
    document.getElementById("customerID").focus();
  }
  getDocHeader(){
    let docheading;
    if(this.customerID != null){
      docheading = "Invoice of Customer: " + this.customerID;
    } else{
      docheading = "Invoice of Customer";
    }
    return docheading;
  }
  getDocFooter(){
    return [{id:'-',name:'-',quantity:'-',rate:'-',cost:'-'},{id:'',name:'Total Cost',quantity:'',rate:'',cost:this.totalSum}];
  }
  removeItem(id){
    let tempItem=[];
    for(let el of this.itemList){
      if(el.id == id){
        this.totalSum = this.totalSum - el.cost;
        let docfooter = [{id:'-',name:'-',quantity:'-',rate:'-',cost:'-'},{id:'',name:'Total Cost',quantity:'',rate:'',cost:this.totalSum}];
        removeItemFromPrintList(id,this.getDocFooter());
      }
      else {
        tempItem.push(el);
      }
      if(el.id > id){
        el.id = el.id -1;
      }
    }
    this.itemList = tempItem;
    this.id = this.id - 1;
    tempItem = [];
  }
  printItem(){
    console.log("method get called");
    let transactionSummary = {customerId:this.customerID, shoppingSummary:this.totalSum};
    let response = this.httpservice.postApiCall(this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_SAVE_URL, transactionSummary,this);
    //this.itemList = [];
    //this.customerID = undefined;
    //this.totalSum = 0;
    //this.id = 0;
    //clearRecord();
    document.getElementById("customerID").focus();
  }
  
}
