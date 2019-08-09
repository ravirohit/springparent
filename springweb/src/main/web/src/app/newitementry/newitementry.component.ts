import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';

@Component({
  selector: 'app-newitementry',
  templateUrl: './newitementry.component.html',
  styleUrls: ['./newitementry.component.css']
})
export class NewitementryComponent implements OnInit {

  myControl = new FormControl();
  headerList:string[]=['Sr.','Item Old Name','Item New Name','Delete'];
  oldName: string;
  newName: string;
  id: number = 0;
  itemList=[];
  options:string[];
  filteredOptions: Observable<string[]>;

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService){
      console.log(urlinfoservice);
      console.log(httpservice);
  }
  callBackOnApi(items) {
    console.log("callback data");
    console.log(items);
    this.options = items;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        //map(value => typeof value === 'string' ? value : value.name),  // in case of value is json object
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  ngOnInit() {
    this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL,'a',this);
  }
  displayFn(user?: string): string | undefined {
    return user ? user : undefined;
  }
  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  addItem(){
    if((this.oldName == undefined) && (this.newName == undefined)){
      document.getElementById("olditeminput").focus();
      return;
    }
    //console.log(this.myControl.value.name);
    this.oldName = this.myControl.value;
    this.id = this.id + 1;
    let item = {id:this.id,oldName:this.oldName,newName:this.newName,remove:'Remove'};
    this.itemList.push(item);
    this.oldName=undefined;
    this.newName=undefined;
    this.myControl.reset('');   // to make the input box "" 
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
    let response = this.httpservice.postApiCall(this.urlinfoservice.ITEM_ENTRY_UPDATE_URL, itemListJson);
    console.log('---- response in comp -----');
    console.log(response);
     
    this.itemList = [];
    this.id = 0;
    document.getElementById("newItemInput").focus();
  }
  getItemInfolist(){

  }
}
 
