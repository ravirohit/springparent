import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';
import {SharedInfoContainerService} from '../service/shared-info-container.service';


declare function printfunc(arg1:Object, arg2:string, arg3:number): any;
declare function removeItemFromPrintList(arg1:number,arg2:number):any;
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
  name:string; 
  quantity:number;
  rate:number;
  cost:number;
  disableFlag:boolean = true;
  id:number = 0;
  item={};
  itemList = [];
  totalSum:number = 0;
  headerList = ['Sr.','Name','Quantity','Rate', 'Cost','Delete'];
  myControl = new FormControl();
  options: Item[];
  filteredOptions: Observable<Item[]>;

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService, private sharedInfo:SharedInfoContainerService) { }

  callBackOnApi(items, isgetApiCallCallBack) {
    if(isgetApiCallCallBack) {
      this.options = items;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),  // in case of value is json object
          map(name => name ? this._filter(name) : this.options.slice())
        );
    }
    else{
     // for pring post api call 
      this.itemList=[];
      this.totalSum=0;
    }
  }
  ngOnInit() {
    this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL,this);
    document.getElementById("customerID").focus();
  }
  displayFn(item?: Item): string | undefined {
    return item ? item.name : undefined;
  }
  private _filter(name: string): Item[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  addItem(){
    if((this.name == undefined) && (this.quantity == undefined)){
      document.getElementById("nameinput").focus();
      return;
    }
    this.name=this.myControl.value.name;
    if((this.name == null)){
      this.name = (<HTMLInputElement>document.getElementById("nameinput")).value;
    }
    //this.rate=this.myControl.value.rate;
    this.id = this.id +1;
    this.item={id:this.id,name:this.name,quantity:this.quantity,rate:this.rate,cost:this.cost,remove:'Remove'};
    this.itemList.push(this.item);
    this.totalSum = this.totalSum + this.cost;
    printfunc({id:this.id,name:this.name,quantity:this.quantity,rate:this.rate,cost:this.cost}, this.customerID, this.totalSum);
    this.name=undefined;
    this.quantity=undefined;
    this.rate=undefined;
    this.cost=undefined;
    this.myControl.reset('');
    document.getElementById("nameinput").focus();
    this.sharedInfo.putData(this.item);
  }
  removeItem(id){
    let tempItem=[];
    for(let el of this.itemList){
      if(el.id == id){
        this.totalSum = this.totalSum - el.cost;
        removeItemFromPrintList(id,this.totalSum);
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
  onItemChange(){
    this.rate = this.myControl.value.rate;;
    this.quantity = 1;
    this.cost =  this.rate;
    if(this.rate == null) {
      this.disableFlag = false;
    }
    else{
      this.disableFlag = true;
    } 
  }
  onEnterRate(){
    this.cost = this.rate * this.quantity;
  }
  onQuantityChange(){
    this.cost = this.rate * this.quantity;
  }
  printItem(){
    console.log("method get called");
    let transactionSummary = {customerId:this.customerID, shoppingSummary:this.totalSum};
    let response = this.httpservice.postApiCall(this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_SAVE_URL, transactionSummary,this);
    this.itemList = [];
    this.customerID = undefined;
    this.totalSum = 0;
    this.id = 0;
    clearRecord();
    document.getElementById("customerID").focus();
  }
  
}
