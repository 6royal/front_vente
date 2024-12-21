import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';


@Injectable({
  providedIn: 'root'
})
export class ProdutService {
    private BASE_URL = 'http://localhost:8080/'

  constructor(private http : HttpClient) { }

  getAllProduct(): Observable<Product[]>{
    return  this.http.get<Product[]>(this.BASE_URL +"api/products",{
      headers : this.createAuthorizationHeader(),


    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateProduct(product: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}api/products/update/${product.id}`, product,{
      headers : this.createAuthorizationHeader(),
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createProduct(product:any):Observable<any>{
    return this.http.post(this.BASE_URL+"api/products/save",product,{
      headers : this.createAuthorizationHeader(),
    })  
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
