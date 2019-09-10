import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';
import {SharedInfoContainerService} from '../service/shared-info-container.service';
import {CommonDataContainerService} from '../service/common-data-container.service'


declare function printfunc(arg1:Object, arg2:string, arg3:Object[]): any;
declare function removeItemFromPrintList(arg1:number,arg2:Object[]):any;
declare function updateRecord(arg1:number,arg2:number,arg3:number, arg4:number):any;
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
export class CreatetransaccompComponent implements OnInit, AfterViewInit {

  customerID:string;
  //name:string; 
  barcode:string;
  quantity:number;
  rate:number;
  itemBarKeyMapItem=new Map();   // to keep track of added item in table
  disableFlag:boolean = true;
  alreadyPrintDone = false;
  id:number = 0;
  itemList = [];
  totalSum:number = 0;
  headerList = ['Sr.','Name','Quantity','Rate', 'Cost','Action'];

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService, 
              private sharedInfo:SharedInfoContainerService, private dataContainer:CommonDataContainerService) { }

  ngAfterViewInit() {
    document.getElementById("customerID").focus();
  }
  ngOnInit(){
    console.log("ngoneint get called");
    clearRecord();
    if(this.dataContainer.getMappedObjectIdToItem()){
      console.log("itemList already fetched from backend");
      return ;
    }
    this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL,this);
  }            
  callBackOnApi(items, isPostApiCall) {
    if(isPostApiCall){
      console.log("call back method after post api call");
      return;
    }else {
      console.log("items stored in the inventory:",items);
      let itemMapToId= new Map();
      items.forEach(el => {
        itemMapToId.set(el.barcode,el);
      });
      this.dataContainer.setMappedObjectIdToItem(itemMapToId);
    }
  }
  
  onEnterBarcode(event){

    if (event.key === "Enter") {
      if((this.barcode == undefined) && (this.quantity == undefined)){
        //document.getElementById("barcode").focus();
        return;
      }
      this.quantity = 1;
      let item = this.dataContainer.getItem(this.barcode);
      if(item == null){
        this.disableFlag = false;
        setTimeout(function(){ document.getElementById("quantity").focus(); }, 50);  // to change the focus after re-render
        return;
      }else{
        this.disableFlag = true;
      }
     let addedItem = this.itemBarKeyMapItem.get(this.barcode);
     if(addedItem) {
         addedItem.quantity += this.quantity;   // how many item of same kind getting entered
         addedItem.cost = addedItem.quantity * addedItem.rate;
         this.totalSum += this.quantity * addedItem.rate;   // only raise with amount getting added in this call;
         updateRecord(addedItem.id, addedItem.quantity, addedItem.cost,this.totalSum);
         this.barcode=undefined;
         document.getElementById("barcode").focus();
     }
     else {
       this.id = this.id +1;
       let cost = this.quantity * item.rate;
       let itemTemp={id:this.id,name:item.name,quantity:this.quantity,rate:item.rate,cost:cost,remove:'Remove',barcode:this.barcode};
       this.itemList.push(itemTemp);
       this.itemBarKeyMapItem.set(this.barcode,itemTemp);
       this.totalSum = this.totalSum + cost;
       printfunc({id:this.id,name:item.name,quantity:this.quantity,rate:item.rate,cost:cost}, this.getDocHeader(), this.getDocFooter());
 
       this.barcode=undefined;
       this.quantity=undefined;
       this.rate = undefined; 
       document.getElementById("barcode").focus();
     }
    }
    
  }
  
  onQuantityChange(){  // for manula entry
    document.getElementById("rate").focus();
  }
  onEnterRate(){    // for manula entry
    if(this.rate == undefined){
      return;
    }
    this.id = this.id +1;
    let cost = this.quantity * this.rate;
    let itemTemp={id:this.id,name:this.barcode,quantity:this.quantity,rate:this.rate,cost:cost,remove:'Remove'};
    this.itemList.push(itemTemp);
    this.totalSum = this.totalSum + cost;
    printfunc({id:this.id,name:this.barcode,quantity:this.quantity,rate:this.rate,cost:cost}, this.getDocHeader(), this.getDocFooter());

    this.barcode=undefined;
    this.quantity=undefined;
    this.rate=undefined;
    this.disableFlag=true;
    document.getElementById("barcode").focus();
  }
  
  clearItem(){    // on clicking new button .
    this.itemList = [];
    this.customerID = undefined;
    this.totalSum = 0;
    this.id = 0;
    this.itemBarKeyMapItem.clear();
    clearRecord();
    this.alreadyPrintDone = false;   // as starting new transaction so making print function not done. must click new to start new transaction
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
        this.itemBarKeyMapItem.delete(el.barcode);

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
    document.getElementById("barcode").focus();

  }
  printItem(){
    if(this.alreadyPrintDone){
      console.log("already this transaction has been saved so not saving it.");
      return; 
    }
    let itemList = this.getPayload();
    let transactionSummary = {customerId:this.customerID, customerShoppingList:itemList,totalShoppingAmount:this.totalSum};
    console.log("request payload:");
    console.log(transactionSummary);
    let response = this.httpservice.postApiCall(this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_SAVE_URL, transactionSummary,this);
    this.alreadyPrintDone = true;  // as because this transaction saved. now any more print click will not save again and again.
    document.getElementById("customerID").focus();
  }
  getPayload(){
    let itemListStr = JSON.stringify(this.itemList);
    let itemList = JSON.parse(itemListStr);
    console.log("itemList after converting to str:",itemList);
    itemList.forEach(item => {
      delete item.id;
      delete item.remove;
    });
    return itemList;
  }
  
}
