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
  selector: 'app-admincomp',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {

  name:string;
  rate:number;
  id:number=0;
  itemList=[];
  headerList=['Sr.','CustomerId','Shopping Amount'];

  myControl = new FormControl();
  options: Item[];
  filteredOptions: Observable<Item[]>;

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService) { }
  ngOnInit() {
    this.httpservice.getApiCall(this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_GET_URL,this);
//    document.getElementById("nameinput").focus();
  }
  callBackOnApi(items) {
    this.itemList = items;
    /* this.options = items;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),  // in case of value is json object
        map(name => name ? this._filter(name) : this.options.slice())
      ); */
  }
  
  private _filter(name: string): Item[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  displayFn(item?: Item): string | undefined {
    return item ? item.name : undefined;
  }
  addItem(){
    if((this.name == undefined) && (this.rate == undefined)){
      document.getElementById("nameinput").focus();
      return;
    }
    this.id = this.id + 1;
    this.name=this.myControl.value.name;
    let item = {id:this.id,name:this.name,rate:this.rate,remove:'Remove'};
    this.itemList.push(item);
    this.name=undefined;
    this.rate=undefined;
    this.myControl.reset('');
    document.getElementById("nameinput").focus();

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
    this.itemList = [];
    this.id = 0;
    document.getElementById("nameinput").focus();
  }

}
