import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { DataManagerService } from '../../../services/data-manager.service';
import { NgFor } from '@angular/common';
import { BehaviorSubject, defer } from 'rxjs';
import { Interaction } from 'chart.js';

@Component({
  selector: 'app-expenselist',
  imports: [NgFor],
  templateUrl: './expenselist.component.html',
  styleUrl: './expenselist.component.scss'
})
export class ExpenselistComponent {
  kiadasKategoriak: any[]=[];
  kiadasok: any[] = []
  constructor(private dataManagerService: DataManagerService){
    this.kiadasok = JSON.parse(localStorage.getItem('kiadasok')|| '[]' );
  }

kiadasokFelugyelet:any[] = []

  
kiadaskategoriatomb: any[] =[];
ngOnInit(): void {
  this.dataManagerService.kiadasok()
  this.dataManagerService.kiadasokKategoriaNeve();
  this.kiadasokFelugyelet = JSON.parse(localStorage.getItem('kiadasok')|| '[]' );
  console.log(this.kiadasokFelugyelet);
  this.dataManagerService.kiadasok$.subscribe((data) => {
    this.kiadasok = data;
  }); 
}

  kiadasTorles(index: number,kiadasID: number) {
    this.dataManagerService.kiadasTorles(index,kiadasID);
  }
}
