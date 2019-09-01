import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';
import {CommonDataContainerService} from '../service/common-data-container.service'

export interface Item{
   name: string;
   rate:number;
}

@Component({
  selector: 'app-newitementry',
  templateUrl: './newinventoryentry.component.html',
  styleUrls: ['./newinventoryentry.component.css']
})
export class NewInventoryEntryComponent implements OnInit, AfterViewInit  {

  myControl = new FormControl();
  
  barcode: string;
  rate: number;
  name: string;
  headerList:string[]=['Sr.','Item Bar Code','Item Name','Rate','Action'];
  id: number = 0;
  itemBarKeyMapItem=new Map();
  isItemExist:boolean=false;
  itemList=[];
  options:Item[];
  filteredOptions: Observable<Item[]>;

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService,
              private dataContainer:CommonDataContainerService){
  }
  ngAfterViewInit() {
    document.getElementById("itembarcode").focus();
  }
  ngOnInit() {
    if(this.dataContainer.getMappedObjectIdToItem()){
      console.log("itemList already fetched from backend");
      return;
    }
    this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL,this);
  }
  
  callBackOnApi(items, isPostApiCall) {
    if(isPostApiCall){
      console.log("call back method after post api call");
      this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL,this);  // to synch to updated item with browser item
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
  onBarCodeEnter(event){
    if (event.key === "Enter") {
      let item = this.dataContainer.getItem(this.barcode);
      if(item) {   // in case we want to update the rate/name of added item, we need to call this.
        this.name = item.name;
        this.rate = item.rate;
        this.isItemExist = true;
      }
      else{
        this.isItemExist = false;
      }
      document.getElementById("itemName").focus();
    }
  }
  
  addItem(){

    if((this.barcode == undefined)){
      document.getElementById("itembarcode").focus();
      return;
    }
    let addedItem = this.itemBarKeyMapItem.get(this.barcode);
    if(addedItem) {  //as this item is already added it the table.. so ignore it
      this.barcode=undefined;
      this.name=undefined;
      this.rate=undefined;
      this.isItemExist = false;
      document.getElementById("itembarcode").focus();
        return;   
    }
    this.id = this.id + 1;

    let item = {id:this.id,barcode:this.barcode,name:this.name,rate:this.rate,remove:'Remove',itemExistFlag:this.isItemExist};
    this.itemBarKeyMapItem.set(this.barcode,item);
    this.itemList.push(item);
    this.barcode=undefined;
    this.name=undefined;
    this.rate=undefined;
    this.isItemExist = false;
    document.getElementById("itembarcode").focus();
    //document.getElementById("nameinput").focus();

  }
  removeItem(id:number){
    let tempItem=[];
    for(let el of this.itemList){
      if(el.id == id){
        this.itemBarKeyMapItem.delete(el.barcode);
      }else {
        tempItem.push(el);
      }
      if(el.id > id){
        el.id = el.id -1;
      }
    }
    this.itemList = tempItem;
    this.id = this.id - 1;
    tempItem = [];
    document.getElementById("itembarcode").focus();
  }
  saveItem(){
    let itemListStr = JSON.stringify(this.itemList);
    let itemListJson = JSON.parse(itemListStr);
    console.log("======="+itemListStr);
    itemListJson.map(el => {
        delete el.id;
        delete el.remove;
    });
    let response = this.httpservice.postApiCall(this.urlinfoservice.ITEM_ENTRY_UPDATE_URL, itemListJson,this); 
    this.itemList = [];
    this.id = 0;
    document.getElementById("itembarcode").focus();
  }
  getItemInfolist(){

  }
}
 
