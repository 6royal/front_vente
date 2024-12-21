import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   apiUrl="http://localhost:8080/";

  constructor(private http : HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createOrder(order:any):Observable<any>{
    return this.http.post(this.apiUrl +"api/order",order,{
      headers : this.createAuthorizationHeader()} )
  }


   private createAuthorizationHeader(): HttpHeaders | undefined {
        const jwtToken = localStorage.getItem('jwt');
        if (jwtToken) {
          console.log('JWT token found in local storage:', jwtToken);
          return new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
        } else {
          console.log('JWT token not found in local storage');
          return undefined;
        }
      }
  
}
