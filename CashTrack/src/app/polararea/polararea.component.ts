import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-polararea',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './polararea.component.html',
  styleUrl: './polararea.component.css'
})
export class PolarareaComponent {
  kiadasoktomb = JSON.parse(localStorage.getItem('kiadasok') || '[]');
kiadaskategoriatomb= JSON.parse(localStorage.getItem('kiadaskategoriak') || '[]');
 
// PolarArea
public polarAreaChartLabels: string[] = [];
public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [

  { data:   this.kiadasoktomb.map((kiadas:any) => kiadas.value),
    backgroundColor: [
    'rgba(0, 50, 0, 1)',
    'rgba(0, 75, 0, 1)',
    'rgba(0, 100, 0, 1)',
    'rgba(0, 125, 0, 1)',
    'rgba(0, 150, 0, 1)',
    'rgba(0, 175, 0, 1)',
    'rgba(0, 200, 0, 1)',
    'rgba(0, 225, 0, 1)',
    'rgba(25, 255, 25, 1)',
    'rgba(50, 255, 50, 1)',
    'rgba(75, 255, 75, 1)',
    'rgba(100, 255, 100, 1)',
    'rgba(125, 255, 125, 1)',
    'rgba(150, 255, 150, 1)',
    'rgba(175, 255, 175, 1)',
    'rgba(200, 255, 200, 1)'
    ],
    borderColor: [
      'rgba(0, 50, 0, 1)',
    'rgba(0, 75, 0, 1)',
    'rgba(0, 100, 0, 1)',
    'rgba(0, 125, 0, 1)',
    'rgba(0, 150, 0, 1)',
    'rgba(0, 175, 0, 1)',
    'rgba(0, 200, 0, 1)',
    'rgba(0, 225, 0, 1)',
    'rgba(25, 255, 25, 1)',
    'rgba(50, 255, 50, 1)',
    'rgba(75, 255, 75, 1)',
    'rgba(100, 255, 100, 1)',
    'rgba(125, 255, 125, 1)',
    'rgba(150, 255, 150, 1)',
    'rgba(175, 255, 175, 1)',
    'rgba(200, 255, 200, 1)'
    ],
    
    borderWidth: 2
    
   }
];

public polarAreaLegend = true;

public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {

  responsive: true,
  scales: {
    r: {
      min: 0,
      max: 100,
    }
  }
};
constructor() {
}
ngOnInit():void{
  this.kiadasokKategorizlasa();
  this.polarAreaChartDatasets[0].data = new Array(this.polarAreaChartLabels.length).fill(0);
  console.log('datasets',this.polarAreaChartDatasets);
}


kiadasokKategorizlasa(): void {
  console.log('Kiadasok:', this.kiadasoktomb);
  console.log('Kiadás kategóriák:', this.kiadaskategoriatomb);
  console.log('polarAreaChartLabels:', this.polarAreaChartDatasets[0].data);
  this.kiadaskategoriatomb.forEach((element: any) => {
    this.polarAreaChartLabels.push(element.kiadasKategoria);
  });
  this.kiadasoktomb.forEach((kiadas: any) => {
    const index = this.polarAreaChartLabels.indexOf(kiadas.kategoriaNev);
    if (index !== -1) {
      this.polarAreaChartDatasets[0].data[index] = (this.polarAreaChartDatasets[0].data[index] || 0) + 1;
    }
  });
  this.polarAreaChartDatasets = [...this.polarAreaChartDatasets];
}
}


