import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private apiUrl = 'http://127.0.0.1:8000/api/kiadasok';
  private apiUrlKiadasKategoriak = 'http://127.0.0.1:8000/api/kiadaskategoriak';
    constructor(private http: HttpClient) 
  {
    window.addEventListener('storage', (event) => {
      if (event.key === this.kiadaskulcs) {
        this.kiadasokFigyeles.next(this.kiadasokLekerese());
      }
    });
  }
  kiadasokOsszes: {kiadasID: number, felhasznaloID: number, kiadasHUF: number, kiadasDatum: string, kategoriaID: any ,kategoriaNev: string , kiadasKomment: string}[]= []

  kiadaskategoriatomb:any[] = []
 kiadasok(){
    const user = JSON.parse(localStorage.getItem('felhasznalo') || '{}');
    this.http.get(`${this.apiUrl}/felhasznalo/${user.felhasznaloID}`).subscribe((data: any) => {
      this.kiadasokOsszes = data;
      this.kiadasKategoriakLekerese()
      this.kiadasokOsszes.forEach((element : any) => {
        this.kiadaskategoriatomb.forEach((kiadasKategoriak: any) => {
          if(element.kategoriaID == kiadasKategoriak.kategoriaID){
            element.kategoriaNev = kiadasKategoriak.kiadasKategoria;
          }
        });
      });
      this.kiadasokOsszes.sort((a, b) => new Date(b.kiadasDatum).getTime() - new Date(a.kiadasDatum).getTime());
      localStorage.setItem('kiadasok', JSON.stringify(this.kiadasokOsszes))
    });

    return this.kiadasokOsszes;
  }

  kiadasKategoriakLekerese(): any[]
  {
     this.http.get(`${this.apiUrlKiadasKategoriak}`).subscribe((data:any) => {
      this.kiadaskategoriatomb = data;
      localStorage.setItem('kiadaskategoriak', JSON.stringify(this.kiadaskategoriatomb))
     })
     return this.kiadaskategoriatomb;
  };
  kiadasFeltoltes(kiadasAdat: {felhasznaloID:number, kiadasHUF: number, kiadasDatum: string,kategoriaID: any, kiadasKomment: string}):Observable<any>{
    return this.http.post(`${this.apiUrl}`, kiadasAdat);
  }
  kiadasTorlese(kiadasID: number):Observable<any>{
    let taroltTomb = JSON.parse(localStorage.getItem('kiadasok') || '[]');
      taroltTomb = taroltTomb.filter((item: any) => item.kiadasID !== kiadasID);
      localStorage.setItem('kiadasok', JSON.stringify(taroltTomb));
      console.log(JSON.parse(localStorage.getItem('kiadasok') || '[]'))
    return this.http.delete(`${this.apiUrl}/${kiadasID}`);
      
  }
  //KIADAS TESZT
  private kiadaskulcs = "kiadasok";
  private kiadasokFigyeles = new BehaviorSubject<any[]>(this.kiadasokLekerese());
  kiadasok$ = this.kiadasokFigyeles.asObservable();
  private kiadasokLekerese(): any[] {
    return JSON.parse(localStorage.getItem(this.kiadaskulcs) || '[]');
  }
  kiadasTorles(index: number, kiadasID: number) {
    const frissitettKiadas = this.kiadasokLekerese().filter((_, i) => i !== index);
    this.kiadasokFrissitese(frissitettKiadas);
    console.log(JSON.parse(localStorage.getItem(this.kiadaskulcs) || '[]'));
    return this.http.delete(`${this.apiUrl}/${kiadasID}`).subscribe(Response => {
      console.log(Response);
    });
    
  
  }
  kiadasokKategoriaNeve(){
    this.kiadasok();
    this.kiadasKategoriakLekerese();

    this.kiadasokOsszes.forEach(element => {
      this.kiadaskategoriatomb.forEach(kiadasKategoriak => 
        {
        if(element.kategoriaID = kiadasKategoriak.kategoriaID)
          {
          element.kategoriaNev = kiadasKategoriak.kiadasKategoria
          }
        
      });
    });
    localStorage.setItem('kiadasok', JSON.stringify(this.kiadasokOsszes));
  }
  kiadasokFrissitese(ujKiadasok: any[]) {
    localStorage.setItem(this.kiadaskulcs, JSON.stringify(ujKiadasok));
    this.kiadasokFigyeles.next(ujKiadasok); 
  }
  kiadasHozzaadas(kiadasAdat: {felhasznaloID:number, kiadasHUF: number, kiadasDatum: string,kategoriaID: any, kiadasKomment: string}):Observable<any>{
    const frissitettAdat = [...this.kiadasokLekerese(), kiadasAdat];
    this.kiadasokFrissitese(frissitettAdat);
    return this.http.post(`${this.apiUrl}`, kiadasAdat)
    
  }

}
