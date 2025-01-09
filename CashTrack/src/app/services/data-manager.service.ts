import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private apiUrl = 'http://127.0.0.1:8000/api/kiadasok';
  constructor(private http: HttpClient) { }
  
 havikiadasok():Observable<any>{
    const user = JSON.parse(localStorage.getItem('felhasznalo') || '{}');
    return this.http.get(`${this.apiUrl}/felhasznalo/${user.felhasznaloID}`);
     
    
  }
}
