import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'https://your-api-url.com/login'; // Cseréld ki a szervered URL-jére

  constructor(private http: HttpClient) { }

  // Belépési kérés küldése
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { username, password });
  }
}
