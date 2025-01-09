import { Component } from '@angular/core';
import { DataManagerService } from '../../services/data-manager.service';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [NgFor, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  havikiadasok:any[] = [];
  havikoltseg = 0;
constructor(private http: HttpClient,private dataManagerService:DataManagerService) { }

ngOnInit(): void {
  this.dataManagerService.havikiadasok().subscribe((data)=>{
    this.havikiadasok = data;
    for (let i = 0; i < this.havikiadasok.length; i++) {
    this.havikoltseg = this.havikoltseg + this.havikiadasok[i].osszeg;
    }

});
}}
