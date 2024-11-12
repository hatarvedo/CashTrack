import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import internal from 'stream';


@Injectable({
  providedIn: 'root'
})
export class AdatokService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/felhasznalok');
  }

  insertData(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addFelhasznalo', data);
  }

  deleteData(id: BigInteger){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteFelhasznalo'+id); 
  }
}
