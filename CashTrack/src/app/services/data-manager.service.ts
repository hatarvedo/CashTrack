import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://127.0.0.1:8000/api/';
  havikiadasok():Observable<any>{
    return this.http.get(`${this.apiUrl}/kiadasok/felhasznalo/${localStorage.getItem('felhasznalo.id')}`);
    
    
  }
}
