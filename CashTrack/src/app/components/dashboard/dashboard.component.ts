import { Component,OnInit } from '@angular/core';
import { DataManagerService } from '../../services/data-manager.service';
import { NgFor } from '@angular/common';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [NgFor],
  providers: [DataManagerService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  kiadasok = [];
  havikoltseg = 0;
  user = JSON.parse(localStorage.getItem('felhasznalo') || '{}');

  
constructor(private http: HttpClient,private dataManagerService:DataManagerService) { }

ngOnInit(): void {
  this.dataManagerService.havikiadasok().subscribe((data)=>{

    this.kiadasok = data;
    this.kiadasok.forEach((kiadas:any)=>{
      this.havikoltseg += kiadas.kiadasHUF;

    });
  });


}}
