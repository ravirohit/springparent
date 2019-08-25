import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonDataContainerService {

  mappedItemIdToItem=null;
  constructor() { }
  setMappedObjectIdToItem(mappedItems:Object){
    this.mappedItemIdToItem = mappedItems;
  }
  getMappedObjectIdToItem(){
    return this.mappedItemIdToItem;
  }
  getItem(key:string){
    if(this.mappedItemIdToItem) {
      return this.mappedItemIdToItem.get(key);
    }
    else{
      return null;
    }
  }
}
