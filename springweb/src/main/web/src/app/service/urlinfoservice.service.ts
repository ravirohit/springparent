import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlinfoserviceService {
  ITEM_GET_INFO_URL:string='http://localhost:8080/springserver/api/getiteminfo/\'a\'';
  ITEM_ENTRY_UPDATE_URL:string='http://localhost:8080/springserver/api/saveorupdatetitem/';

  constructor() { }
}
