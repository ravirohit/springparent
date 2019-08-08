import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-admincomp',
  templateUrl: './admincomp.component.html',
  styleUrls: ['./admincomp.component.css']
})
export class AdmincompComponent implements OnInit {

  name:string;
  rate:number;
  id:number=0;
  itemList=[];
  headerList=['Sr.','Item name','Rate','Delete'];

  myControl = new FormControl();
  options: User[] = [
    {name: 'Bihar'},
    {name: 'NagaLand'},
    {name: 'UP'},
    {name: 'ASAM'},
    {name: 'Delhi'},
    {name: 'Haryana'},
    {name: 'Panjab'},
    {name: 'Jammu'},
    {name: 'MP'}
  ];
  filteredOptions: Observable<User[]>;

  constructor() { }

  ngOnInit() {

    this.myControl.reset();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    document.getElementById("nameinput").focus();
  }
  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  addItem(){
    if((this.name == undefined) && (this.rate == undefined)){
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
    console.log('item to be removed:'+id);
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
    this.itemList = [];
    this.id = 0;
    document.getElementById("nameinput").focus();
  }

}
