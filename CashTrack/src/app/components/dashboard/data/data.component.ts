import { Component } from '@angular/core';
import { JovedelemManagerService } from '../../../services/jovedelem-manager.service';

@Component({
  selector: 'app-data',
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  jovedelmek : any[] = [];
  jovedelemFelugyelet:any[] = []
constructor(private jovedelemService: JovedelemManagerService)
{
  this.jovedelmek =  JSON.parse(localStorage.getItem('jovedelmek') || '[]');
}

havijovedelmek = () => this.jovedelemService.szamolas();
  ngOnInit(): void{
    this.jovedelemService.jovedelemLekeres();
 
    this.jovedelemFelugyelet = JSON.parse(localStorage.getItem('jovedelmek')|| '[]' );
    console.log(this.jovedelemFelugyelet);
    this.jovedelemService.jovedelem$.subscribe((data) =>
      {
        this.jovedelmek = data;
      });
    this.jovedelemFelugyelet.forEach((element:any) => {
      this.havijovedelmek = this.havijovedelmek +element.bevetelHUF
      return this.havijovedelmek
    });

  }




}
