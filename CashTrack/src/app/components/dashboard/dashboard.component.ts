import { Component } from '@angular/core';
import { DataManagerService } from '../../services/data-manager.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  havikiadasok:any[] = [];
constructor(private dataManagerService:DataManagerService) { }

ngOnInit(): void {
  this.dataManagerService.havikiadasok().subscribe((data)=>{
    this.havikiadasok = data;
});
}}
