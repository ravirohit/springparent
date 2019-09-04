import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlinfoserviceService {
  ITEM_GET_INFO_URL:string='http://localhost:8080/springserver/api/getiteminfo/';
  ITEM_ENTRY_UPDATE_URL:string='http://localhost:8080/springserver/api/saveorupdatetitem/';
  CUSTOMER_SHOPPING_SUMMARY_SAVE_URL:string='http://localhost:8080/springserver/api/saveshoppingsummary/';
  CUSTOMER_SHOPPING_SUMMARY_GET_URL:string='http://localhost:8080/springserver/api/getshoppingsummary';
  CUSTOMER_LOGOUT_URL:string='http://localhost:8080/springserver/api/logout';
  
  

  constructor() { }
}
