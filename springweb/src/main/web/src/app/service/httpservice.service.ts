import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  endpoint = 'http://localhost:3000/api/v1/';
  httpOptions = {};

  constructor(private http: HttpClient) { }

  /* getApiCall(url:string){
    this.http.get(url)
      .pipe(map((response) => response.json()))
      .subscribe((data) => console.log(data)); 
  }  */
  getGetHeader(){
    this.httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }
  getApiCall(endpoint:string, ref){  //: Observable<any> 
    this.getGetHeader();
    return this.http.get(endpoint, this.httpOptions).subscribe(
      data  => {
          console.log("Get Item info Request is successful ", data);
          ref.callBackOnApi(data,true);
          
      },
      error  => {
      console.log("Error", error);
      });
  }
  private extractData(res: Response) {
    console.log('callback function');
    console.log(res);
    let body = res;
    return body || { };
  }
  getPostHeader(){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
  }
  postApiCall(endpoint:string,payload,ref) {
    this.getPostHeader();
    console.log('Post method get called');
    console.log(payload);
    /* return this.http.post(endpoint, JSON.stringify(payload), this.httpOptions)
    .pipe(
      map(this.extractData)); */
      this.http.post(endpoint,JSON.stringify(payload),this.httpOptions)
      .subscribe(
      data  => {
          console.log("POST Request is successful ", data);
          ref.callBackOnApi(data,false);   // same callbackback function is getting called for two api.. to identify the api..boolean is used
      },
      error  => {
      console.log("Error", error);
      }
      );
  }
  


}
