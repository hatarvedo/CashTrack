import { Component,OnInit } from '@angular/core';
import { DataManagerService } from '../../services/data-manager.service';
import { CommonModule } from '@angular/common'; //
import { NgFor } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';



@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [NgFor, NgApexchartsModule, CommonModule],
  providers: [DataManagerService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  kiadasok = [];
  havikoltseg = 0;
  user = JSON.parse(localStorage.getItem('felhasznalo') || '{}');
  bevetelSum:number = 7612;
  kiadasSum:number = 3162;
  EURtoHUF:number = 413.70;
  
constructor(private http: HttpClient,private dataManagerService:DataManagerService) { }

ngOnInit(): void {
  this.dataManagerService.havikiadasok().subscribe((data)=>{

    this.kiadasok = data;
    this.kiadasok.forEach((kiadas:any)=>{
      this.havikoltseg += kiadas.kiadasHUF;

    });
  });


}}
