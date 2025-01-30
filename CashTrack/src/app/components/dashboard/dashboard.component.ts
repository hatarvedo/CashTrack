import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importáld a CommonModule-t
import { DataManagerService } from '../../services/data-manager.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importáld a FormsModule-t
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
 
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,  NgApexchartsModule, FormsModule, ReactiveFormsModule], // Add hozzá a CommonModule-t és a FormsModule-t az imports-hoz
  providers: [DataManagerService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;
  constructor(private http: HttpClient, private dataManagerService: DataManagerService, private router:Router,private authService:AuthService){
    const series = {
      monthDataSeries1: {
        prices: [10, 41, 35, 51, 49, 62, 69, 91, 126],
        dates: []
      }
    };

    this.chartOptions = {
      series: [
        {
          name: "Kiadások",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },

      title: {
        text: "Havi kiadások",
        align: "left"
      },
      subtitle: {
        text: "Költségek",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };

  }
  //ApexCharts



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
  private subscription: any;


  ngOnInit(): void {
    this.subscription = this.dataManagerService.havikiadasok().subscribe((data) => {
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
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }



 
}