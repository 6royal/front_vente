
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
  // Interface pour la requête d'inscription
  interface SignUpRequest {
    email: string;
    password: string;
    username?: string; // Optionnel
  }

  // Interface pour la requête de connexion
interface ApiResponse {
  jwt: string;
  // Ajoutez d'autres propriétés si nécessaires
}


  // Interface pour la réponse de l'API
 
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private BASE_URL = 'http://localhost:8080/' // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}



  register(signRequest: SignUpRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.BASE_URL + 'signup', signRequest);
  }
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  login(loginRequest: any): Observable<any> {
    return this.http.post(this.BASE_URL +"login", loginRequest, { responseType: 'text' as 'json' });
  }

  hello(): Observable<unknown> {
    return this.http.get(this.BASE_URL + 'api/hello', {
      headers: this.createAuthorizationHeader()
    });
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


