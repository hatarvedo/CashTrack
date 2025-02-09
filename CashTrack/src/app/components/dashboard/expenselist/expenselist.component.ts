import { Component, EventEmitter, Output } from '@angular/core';
import { DataManagerService } from '../../../services/data-manager.service';
import { NgFor } from '@angular/common';
import { defer } from 'rxjs';
import { Interaction } from 'chart.js';

@Component({
  selector: 'app-expenselist',
  imports: [NgFor],
  templateUrl: './expenselist.component.html',
  styleUrl: './expenselist.component.scss'
})
export class ExpenselistComponent {
  kiadasKategoriak: any;
  constructor(private dataManagerService: DataManagerService){}
  kiadasokOsszes: {kiadasID: number, felhasznaloID: number, kiadasHUF: number, kiadasDatum: string, kategoriaID: any ,kategoriaNev: string , kiadasKomment: string}[]= [];

  kiadaskategoriatomb = JSON.parse(localStorage.getItem('kiadaskategoriak') || '{}');

ngOnInit(): void {
  this.kiadasListaMutat();
  this.kiadasokOsszes = JSON.parse(localStorage.getItem('kiadasok') || '[]');
  this.kiadasKategoriakLekeres();
  this.kiadaskategoriatomb = JSON.parse(localStorage.getItem('kiadaskategoriak') || '[]');
  this.kiadasokOsszes.sort((a, b) => new Date(b.kiadasDatum).getTime() - new Date(a.kiadasDatum).getTime());
  this.kiadasokOsszes.forEach((element: any) => {
    this.kiadaskategoriatomb.forEach((kiadasKategoriak: any) => {
      if (element.kategoriaID == kiadasKategoriak.kategoriaID) {
        element.kategoriaID = kiadasKategoriak.kiadasKategoria;
        console.log('kategoria neve:', element);
        element.kategoriaNev = kiadasKategoriak.kiadasKategoria;
      }
    });
  });
}
  kiadasTorles(kiadasID: number){
    this.dataManagerService.kiadasTorlese(kiadasID).subscribe((response : any) => {
      if(response){
        alert('Kiadás sikeresen törölve!');
        this.kiadasListaMutat();
        console.log(response);
        
      }
      
      

    });
  }
 
  kiadasKategoriakLekeres(): void {
    this.dataManagerService.kiadasKategoriakLekerese().subscribe((data) => {
      this.kiadasKategoriak = data;
      (localStorage.setItem('kiadaskategoriak',JSON.stringify(data)))
      console.log(this.kiadasKategoriak);
    });
  }
  kiadasListaMutat(){
    this.kiadasokOsszes = JSON.parse(localStorage.getItem('kiadasok')|| '{}' );
      this.kiadaskategoriatomb = JSON.parse(localStorage.getItem('kiadaskategoriak') || '{}');
      this.kiadasokOsszes.sort((a, b) => new Date(b.kiadasDatum).getTime() - new Date(a.kiadasDatum).getTime());
      this.kiadasokOsszes.forEach((element : any) => {
        this.kiadaskategoriatomb.forEach((kiadasKategoriak: any) => {
          if(element.kategoriaID == kiadasKategoriak.kategoriaID){
            element.kategoriaID = kiadasKategoriak.kiadasKategoria;
            console.log('kategoria neve:', element);
            element.kategoriaNev = kiadasKategoriak.kiadasKategoria;
          }
        });
      });
  }
}
