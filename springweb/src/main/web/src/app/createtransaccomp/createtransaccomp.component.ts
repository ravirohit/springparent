import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';

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
  id:number = 0;
  item={};
  itemList = [];
  totalSum:number = 0;
  headerList = ['Sr.','Name','Quantity','Rate', 'Cost','Delete'];
  myControl = new FormControl();
  options: Item[];
  filteredOptions: Observable<Item[]>;

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService) { }

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
    //document.getElementById("nameinput").focus();
  }
  displayFn(item?: Item): string | undefined {
    return item ? item.name : undefined;
  }
  private _filter(name: string): Item[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  addItem(){
    console.log("========================");
    if((this.name == undefined) && (this.quantity == undefined)){
      document.getElementById("nameinput").focus();
      return;
    }
    this.name=this.myControl.value.name;
    this.rate=this.myControl.value.rate;
    this.item={id:this.id+1,name:this.name,quantity:this.quantity,rate:this.rate,cost:this.cost,remove:'Remove'};
    this.itemList.push(this.item);
    this.id = this.id +1;
    this.totalSum = this.totalSum + this.cost;
    this.name=undefined;
    this.quantity=undefined;
    this.rate=undefined;
    this.cost=undefined;
    this.myControl.reset('');
    document.getElementById("nameinput").focus();
  }
  removeItem(id){
    console.log('item to be removed:'+id);
    let tempItem=[];
    for(let el of this.itemList){
      if(el.id == id){
        this.totalSum = this.totalSum - el.cost;
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
    
  }
  onQuantityChange(){
    this.cost = this.rate * this.quantity;
  }
  printItem(){
    console.log("========================");
    document.getElementById("tfoot").style.display = '';
    document.getElementById("tfoot").style.visibility = 'visible';
    let transactionSummary = {customerId:this.customerID, shoppingSummary:this.totalSum};
    let response = this.httpservice.postApiCall(this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_SAVE_URL, transactionSummary,this);
    
  }
  
}
