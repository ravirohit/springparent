import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlinfoserviceService {
  GET_ITEM_INFO_URL:string='http://localhost:8080/springserver/api/getitem/';
  ENTRY_ITEM_URL:string='';
  UPDATE_ITEM_URL:string='';

  constructor() { }
}
