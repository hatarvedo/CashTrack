import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://127.0.0.1:8000/api/felhasznalo/{felhasznaloID}'; // Cseréld ki a szervered URL-jére

  constructor(private http: HttpClient) { }

  // Belépési kérés küldése
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { email, password });
1  }
  register(vezeteknev: string, keresztnev: string, email: string, password: string):        Observable<any> {
  const data = { vezeteknev, keresztnev, email, password };
  return this.http.post('http://127.0.0.1:8000/api/addFelhasznalo', data);
}
}
