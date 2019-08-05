import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createtransaccomp',
  templateUrl: './createtransaccomp.component.html',
  styleUrls: ['./createtransaccomp.component.css']
})
export class CreatetransaccompComponent implements OnInit {
  name=""; 
  quantity="";
  rate="";
  cost="";
  id=0;
  item={};
  itemList = [];
  itemheader = ['Sr.','Name','Quantity','Rate', 'Cost','Delete'];

  constructor() { }

  ngOnInit() {
  }

  addItem(){
    console.log("item added");
    console.log('name:'+this.name+"  "+this.quantity+"  "+this.rate+"  "+this.cost+"  "+this.itemList.length);
    this.item={id:this.id+1,name:this.name,quantity:this.quantity,rate:this.rate,cost:this.cost,remove:'Remove'};
    this.itemList.push(this.item);
    this.id = this.id +1;
    this.name='';
    this.quantity='';
    this.rate='';
    this.cost='';
    document.getElementById("nameinput").focus();
  }
  removeItem(id){
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

}
