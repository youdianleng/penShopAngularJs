import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment.component';

@Injectable({
  providedIn: 'root'  
})

export class AuthServiceService {
  
  constructor(private http: HttpClient) { } 

  login(user: string, password: string) {
    const credentials = { user, password };
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials, {
      observe: 'response',
      withCredentials: true,
    });
  }

  all(){
    return this.http.post(`${environment.apiUrl}/auth`, {
      observe: 'response',
      withCredentials: true,
    });
  }
}
