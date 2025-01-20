import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { DevEnvironment } from './../../environments/environment';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any | null> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/api/auth/login`, body, { headers });
  }

  register(user: any): Observable<any | null> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.baseUrl}/api/auth/register`, user, { headers });
  }
}
