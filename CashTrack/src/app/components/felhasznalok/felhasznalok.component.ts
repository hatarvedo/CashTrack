import { Component, OnInit } from '@angular/core';
import { AdatokService } from '../../service/adatok.service'; 
import { Felhasznalo } from '../../felhasznalo';

@Component({
  selector: 'app-felhasznalok',
  standalone: true,
  imports: [],
  templateUrl: './felhasznalok.component.html',
  styleUrl: './felhasznalok.component.css'
})
export class FelhasznalokComponent implements OnInit{
  felhasznalok:any;
  felhasznalo = new Felhasznalo();
 
  
  constructor(private adatokService:AdatokService){}
  ngOnInit(): void {
    this.getFelhasznaloAdatok();
    throw new Error('Method not implemented.');
  }

  getFelhasznaloAdatok(){
    this.adatokService.getData().subscribe(res =>{
      this.felhasznalok = res;
    });
  }
insertAdat(){
  this.adatokService.insertData(this.felhasznalo).subscribe(res =>{
    this.getFelhasznaloAdatok();
  })
}
}
