import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importáld a CommonModule-t
import { DataManagerService } from '../../services/data-manager.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importáld a FormsModule-t
import { Router, RouterLink } from '@angular/router';
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
[x: string]: any;
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

  jovedelemKategoriak: any = [];
  kiadasKategoriak: any = [];
  kiadasok: {kiadasID: number, felhasznaloID: number, kiadasHUF: number, kiadasDatum: string, kategoriaID: any  , kiadasKomment: string}[]  =[];
  havikoltseg = 0;
  user = JSON.parse(localStorage.getItem('felhasznalo') || '{}');
  currentYear: number = 0; 
  currentMonth: number = 0; 
  currentDay: number = 0;
  wholeYear: number = 0;
  private subscription: any;
//Felhasznalo ID 
felhasznalo = JSON.parse(localStorage.getItem('felhasznalo') || '{}');
felhasznaloID = this.felhasznalo.felhasznaloID;
  //Bevétel függvények
jovedelemKategoriakLekeres():void{
  this.dataManagerService.jovedelemKategoriakLekerese().subscribe((data) => {
    this.jovedelemKategoriak = data;
    console.log(this.jovedelemKategoriak);
  });
}
jovedelemTipus:any = '';
jovedelemErtek:number = 0;
jovedelemDatum:string = '';
jovedelemHozzadasa(){
  const jovedelemAdatok ={
    felhasznaloID: this.felhasznaloID,
    bevetelHUF: this.jovedelemErtek,
    bevetelDatum:this.jovedelemDatum,
    kategoriaID: this.jovedelemTipus,
  }
  this.jovedelemKategoriak.forEach((kategoriak: any) => {
    //A kategoriaID megkapja először stringben a nevét, majd az ID-t
    if(jovedelemAdatok.kategoriaID == kategoriak.jovedelemKategoria){
      console.log('Kategoria neve:',jovedelemAdatok.kategoriaID);
      jovedelemAdatok.kategoriaID = kategoriak.kategoriaID
      console.log('Kategoria ID:',jovedelemAdatok.kategoriaID);
      console.log('Kategoriak.kategoriaID:',kategoriak.kategoriaID);
    }
  });
  if(jovedelemAdatok.bevetelHUF && jovedelemAdatok.bevetelDatum && jovedelemAdatok.kategoriaID){
    this.dataManagerService.JovedelemFeltoltes(jovedelemAdatok).subscribe((data) => {
      console.log(data);
      alert('Bevétel sikeresen hozzáadva!')
    });
  }
  else{
    alert('Bevétel hozzáadása sikertelen!');
  }
}
  //Kiadás függvények
kiadasKategoriakLekeres(): void {
  this.dataManagerService.kiadasKategoriakLekerese().subscribe((data) => {
    this.kiadasKategoriak = data;
    (localStorage.setItem('kiadaskategoriak',JSON.stringify(data)))
    console.log(this.kiadasKategoriak);
  });
}
kiadasTipus:any = '';
kiadasErtek:number = 0;
kiadasDatum:string = '';
kiadasMegjegyzes:string = '';
kiadasHozzaadas(){
  const kiadasAdatok = {
    felhasznaloID: this.felhasznaloID,
    kiadasHUF: this.kiadasErtek,
    kiadasDatum: this.kiadasDatum,
    kategoriaID: this.kiadasTipus,
    kiadasKomment: this.kiadasMegjegyzes
  };
  this.kiadasKategoriak.forEach((kategoriak: any) => {
    //A kategoriaID megkapja először stringben a nevét, majd az ID-t
    if(kiadasAdatok.kategoriaID == kategoriak.kiadasKategoria){
      console.log('Kategoria neve:',kiadasAdatok.kategoriaID);
      kiadasAdatok.kategoriaID = kategoriak.kategoriaID
      console.log('Kategoria ID:',kiadasAdatok.kategoriaID);
      console.log('Kategoriak.kategoriaID:',kategoriak.kategoriaID);
      
    }
  });
  if (kiadasAdatok.kategoriaID && kiadasAdatok.kiadasHUF && kiadasAdatok.kiadasDatum) {
    this.dataManagerService.kiadasFeltoltes(kiadasAdatok).subscribe((response: any) => {
      
      if(response){
        console.log('Kiadás hozzáadva',kiadasAdatok);
        alert('Kiadás sikeresen hozzáadva!');
        this.kiadasListaMutat()
      }
      else{
        alert('Kiadás hozzáadása sikertelen!');
      }
    });
  }
}
kiadasokOsszes: {kiadasID: number, felhasznaloID: number, kiadasHUF: number, kiadasDatum: string, kategoriaID: any ,kategoriaNev: string , kiadasKomment: string}[]= [];
kiadaskategoriatomb: any[] = [];

kiadasListaMutat(){
  this.kiadasokOsszes = JSON.parse(localStorage.getItem('kiadasok')|| '{}' )
    this.kiadasKategoriakLekeres();
    this.kiadaskategoriatomb = JSON.parse(localStorage.getItem('kiadaskategoriak') || '{}')
   
     
    console.log('A kiadás kategóriák',this.kiadasKategoriak)
    this.kiadasokOsszes.forEach((element : any) => {
      this.kiadaskategoriatomb.forEach((kiadasKategoriak: any) => {
        if(element.kategoriaID == kiadasKategoriak.kategoriaID){
          element.kategoriaID = kiadasKategoriak.kiadasKategoria
          console.log('kategoria neve:', element)
          element.kategoriaNev = kiadasKategoriak.kiadasKategoria;
        }
      });
    });
}
  ngOnInit(): void {
    this.authService.login();
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth() + 1; // Hónapok 0-tól 11-ig vannak számozva, ezért hozzáadunk 1-et
    this.currentDay = currentDate.getDay();
    this.wholeYear = currentDate.getFullYear();
    
    //Kiadások Listázás
    this.dataManagerService.kiadasok().subscribe((response:any) => {
      if(response){
        console.log(response)
        this.kiadasok = response;
        localStorage.setItem('kiadasok', JSON.stringify(response));
      }
      else{
        console.log(console.error());
      }
    })


    this.kiadasokOsszes = JSON.parse(localStorage.getItem('kiadasok')|| '{}' )
    this.kiadasKategoriakLekeres();
    this.kiadaskategoriatomb = JSON.parse(localStorage.getItem('kiadaskategoriak') || '{}')
   
     
    console.log('A kiadás kategóriák',this.kiadasKategoriak)
    this.kiadasokOsszes.forEach((element : any) => {
      this.kiadaskategoriatomb.forEach((kiadasKategoriak: any) => {
        if(element.kategoriaID == kiadasKategoriak.kategoriaID){
          element.kategoriaID = kiadasKategoriak.kiadasKategoria
          console.log('kategoria neve:', element)
          element.kategoriaNev = kiadasKategoriak.kiadasKategoria;
        }
      });
    });
   
      
  
    }
 
  logout(): void {
    
    this.router.navigate(['home']);
    this.authService.logout();
    localStorage.removeItem('felhasznalo');
    this.authService.logout();
  }

  notWorking(): void{
    alert('Ez a funkció jelenleg nem elérhető!');
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

