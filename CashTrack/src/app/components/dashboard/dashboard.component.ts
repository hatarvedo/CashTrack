import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importáld a CommonModule-t
import { DataManagerService } from '../../services/data-manager.service';
import { NgFor } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms'; // Importáld a FormsModule-t
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgFor, NgApexchartsModule, FormsModule], // Add hozzá a CommonModule-t és a FormsModule-t az imports-hoz
  providers: [DataManagerService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  kiadasok = [];
  havikoltseg = 0;
  user = JSON.parse(localStorage.getItem('felhasznalo') || '{}');
  bevetelSum: number = 0;
  kiadasSum: number = 0;
  EURtoHUF: number = 413.70;
  bevetelInput: number = 0; // Új változó a bevétel inputhoz
  kiadasInput: number = 0; // Új változó a kiadás inputhoz
  currentYear: number = 0; // Új változó az aktuális évhez
  currentMonth: number = 0; // Új változó az aktuális hónaphoz

  constructor(private http: HttpClient, private dataManagerService: DataManagerService, private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.dataManagerService.havikiadasok().subscribe((data) => {
      this.kiadasok = data;
      this.kiadasok.forEach((kiadas: any) => {
        this.havikoltseg += kiadas.kiadasHUF;
      });
    });

    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth() + 1; // Hónapok 0-tól 11-ig vannak számozva, ezért hozzáadunk 1-et
  }
  logout(): void {
    
    this.router.navigate(['home']);
    this.authService.logout();
    localStorage.removeItem('felhasznalo');
    this.authService.logout();
   
  }



 
}