import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { _AdatokService } from '../../service/adatok.service'; 
import { Felhasznalo } from '../../felhasznalo';
import { NgOptimizedImage } from '@angular/common';


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
  
 
  
  constructor(private adatokService:_AdatokService){}
  ngOnInit(): void {
    this.getFelhasznaloAdatok();
    
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
