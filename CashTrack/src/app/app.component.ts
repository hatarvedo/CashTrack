import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,HeaderComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CashTrack';
}
