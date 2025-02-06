import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private apiUrl = 'http://127.0.0.1:8000/api/kiadasok';
  private apiUrlKiadasKategoriak = 'http://127.0.0.1:8000/api/kiadaskategoriak';
  private apiUrlJovedelemKategoriak = 'http://127.0.0.1:8000/api/jovedelemkategoriak';
  private apiUrlJovedelmek = 'http://127.0.0.1:8000/api/jovedelmek';
  constructor(private http: HttpClient) { }
  
 havikiadasok():Observable<any>{
    const user = JSON.parse(localStorage.getItem('felhasznalo') || '{}');
    return this.http.get(`${this.apiUrl}/felhasznalo/${user.felhasznaloID}`);
     
    
  }
  kiadasKategoriakLekerese():Observable<any>
  {
    return this.http.get(`${this.apiUrlKiadasKategoriak}`)
  };
  kiadasFeltoltes(kiadasAdat: {felhasznaloID:number, kiadasHUF: number, kiadasDatum: string,kategoriaID: any, kiadasKomment: string}):Observable<any>{
    return this.http.post(`${this.apiUrl}`, kiadasAdat);
  }
  jovedelemKategoriakLekerese():Observable<any>
  {
    return this.http.get(`${this.apiUrlJovedelemKategoriak}`)
  };
  JovedelemFeltoltes(jovedelemAdatok:{felhasznaloID:number, bevetelHUF: number, bevetelDatum: string,kategoriaID: number}):Observable<any>{
    return this.http.post(`${this.apiUrlJovedelmek}`, jovedelemAdatok);
}
}
