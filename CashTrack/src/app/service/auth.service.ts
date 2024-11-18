import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://127.0.0.1:8000/api/felhasznalo/{felhasznaloID}'; // Cseréld ki a szervered URL-jére
  private apiUrl = 'http://localhost:8000/api/felhasznalok'; // Az API URL-je;
  authService: any;

  constructor(private http: HttpClient) { }

  // Belépési kérés küldése
  login(email: string, jelszo: string): Observable<any> {
    return this.http.post(this.loginUrl, { email, jelszo });
1  }
  register(vezeteknev: string, keresztnev: string, email: string, jelszo : string):        Observable<any> {
  const data = { vezeteknev, keresztnev, email, jelszo };
  return this.http.post('http://127.0.0.1:8000/api/addFelhasznalo', data);
}

getEmail(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
}

  
}
