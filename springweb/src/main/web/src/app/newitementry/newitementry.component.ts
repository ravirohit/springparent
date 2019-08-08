import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';


export interface User {
  name: string;
}

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

  ngOnInit() {
    this.myControl.reset();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
      document.getElementById("olditeminput").focus();
  }
  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  addItem(){
    if((this.oldName == undefined) && (this.newName == undefined)){
      return;
    }
    //console.log(this.myControl.value.name);
    this.oldName = this.myControl.value.name;
    this.id = this.id + 1;
    let item = {id:this.id,oldName:this.oldName,newName:this.newName,remove:'Remove'};
    this.itemList.push(item);
    this.oldName=undefined;
    this.newName=undefined;
    this.myControl.reset('');   // to make the input box "" 
    document.getElementById("olditeminput").focus();
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
    this.itemList = [];
    this.id = 0;
    document.getElementById("olditeminput").focus();
  }
}
 
