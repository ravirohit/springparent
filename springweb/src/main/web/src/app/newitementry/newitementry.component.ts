import {Component, OnInit} from '@angular/core';
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
  selector: 'app-newitementry',
  templateUrl: './newitementry.component.html',
  styleUrls: ['./newitementry.component.css']
})
export class NewitementryComponent implements OnInit {

  myControl = new FormControl();
  headerList:string[]=['Sr.','Item New Name','rate','Item Old Name','Delete'];
  newName: string;
  rate: number;
  oldName: string;
  id: number = 0;
  itemList=[];
  options:Item[];
  filteredOptions: Observable<Item[]>;

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService){
      console.log(urlinfoservice);
      console.log(httpservice);
  }
  ngOnInit() {
    this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL,this);
  }
  
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
      this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL,this);
    }
  }
  private _filter(name: string): Item[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  displayFn(item?: Item): string | undefined {
    return item ? item.name : undefined;
  }
  onItemChange(){
    this.rate = this.myControl.value.rate;
    
  }
  
  
  addItem(){
    if((this.oldName == undefined) && (this.newName == undefined)){
      document.getElementById("olditeminput").focus();
      return;
    }
    this.oldName = this.myControl.value ? this.myControl.value.name: this.myControl.value;
    console.log('this.myControl.value.name:',this.myControl.value);
    console.log('this.oldName:'+this.oldName);
    this.id = this.id + 1;
    let item = {id:this.id,newName:this.newName,rate:this.rate,oldName:this.oldName,remove:'Remove'};
    this.itemList.push(item);
    this.newName=undefined;
    this.rate=undefined;
    this.oldName=undefined;
    this.myControl.reset('');   // to make the input box with function autocomplete "" 
    document.getElementById("newItemInput").focus();
    //document.getElementById("nameinput").focus();

  }
  removeItem(id:number){
    let tempItem=[];
    for(let el of this.itemList){
      if(el.id != id){
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
  saveItem(){
    console.log('Item saved to db');
    let itemListStr = JSON.stringify(this.itemList);
    console.log(itemListStr);
    let itemListJson = JSON.parse(itemListStr);
    itemListJson.map(el => {
        delete el.id;
        delete el.remove;
    });
    let response = this.httpservice.postApiCall(this.urlinfoservice.ITEM_ENTRY_UPDATE_URL, itemListJson,this);
    console.log('---- response in comp -----');
    console.log(response);
     
    this.itemList = [];
    this.id = 0;
    document.getElementById("newItemInput").focus();
  }
  getItemInfolist(){

  }
}
 
