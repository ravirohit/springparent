import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';
import {CommonDataContainerService} from '../service/common-data-container.service'

export interface Item{
  name: string;
  rate:number;
}

@Component({
  selector: 'app-item-entry-inventory',
  templateUrl: './item-entry-inventory.component.html',
  styleUrls: ['./item-entry-inventory.component.css']
})
export class ItemEntryInventoryComponent implements OnInit, AfterViewInit {
  myControl = new FormControl();
  headerList:string[]=['Sr.','Item name','Count','Rate','Action'];
  itembarcode: string;
  itemBarKeyMapItem=new Map();   // to keep track of added item in table
  rate: number;
  id: number = 0;
  itemList=[];

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService,
              private dataContainer:CommonDataContainerService){
  }
  ngAfterViewInit() {
    document.getElementById("itembarcode").focus();
  }
  ngOnInit() {
    if(this.dataContainer.getMappedObjectIdToItem()){
      console.log("itemList already fetched from backend");
      return ;
    }
    this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL,this);
  }
  
  callBackOnApi(items,  isPostApiCall) {
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
  onItemEntry(event){
    if (event.key === "Enter") {
      console.log(event);
      let item = this.dataContainer.getItem(this.itembarcode);
      if(item == null){
        return;
      }
      let addedItem = this.itemBarKeyMapItem.get(this.itembarcode);
      console.log("added item:",addedItem);
      if(addedItem) {
          addedItem.quantity += 1;   // how many item of same kind getting entered
          this.itembarcode=undefined;
          document.getElementById("itembarcode").focus();
      }
      else {
        this.id = this.id + 1;
        item.id = this.id;       // used for sr number in the table;
        item.quantity =  1;        // how many item of same kind getting entered
        item.remove='remove'
        this.itemList.push(item);
        this.itemBarKeyMapItem.set(this.itembarcode,item);
        this.itembarcode=undefined;
        document.getElementById("itembarcode").focus();
      }
    }
  }
  
  removeItem(id:number){
    let tempItem=[];
    for(let el of this.itemList){
      if(el.id == id){
        console.log("deleting item from :",this.itemBarKeyMapItem);
        this.itemBarKeyMapItem.delete(el.barcode);
        console.log("deleting after :",this.itemBarKeyMapItem);
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
    this.itemBarKeyMapItem.clear();
    document.getElementById("itembarcode").focus();
  }
  getItemInfolist(){

  }

}

