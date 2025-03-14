import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class _AdatokService {
 
http = inject(HttpClient);
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/felhasznalo/{felhasznaloId}');
  }

  insertData(data: any){
    return this.http.post('http://127.0.0.1:8000/api/addFelhasznalo', data);
  }

  deleteData(id: BigInteger){
    return this.http.delete('http://127.0.0.1:8000/api/deleteFelhasznalo'+id); 
  }


 
}
