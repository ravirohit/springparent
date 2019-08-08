import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  endpoint = 'http://localhost:3000/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  /* getApiCall(url:string){
    this.http.get(url)
      .pipe(map((response) => response.json()))
      .subscribe((data) => console.log(data)); 
  }  */
  getProducts(endpoint:string,searchkey:string): Observable<any> {
    return this.http.get(endpoint + searchkey,this.httpOptions).pipe(
      map(this.extractData));
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
