import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface User {
  name: string;
}
@Component({
  selector: 'app-createtransaccomp',
  templateUrl: './createtransaccomp.component.html',
  styleUrls: ['./createtransaccomp.component.css']
})
export class CreatetransaccompComponent implements OnInit {
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
    if((this.name == undefined) && (this.quantity == undefined)){
      return;
    }
    this.name=this.myControl.value.name;;
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
    this.rate = Math.round((Math.random()*20));
    this.cost =  undefined;
    
  }
  onQuantityChange(){
    this.cost = this.rate * this.quantity;
  }

}
