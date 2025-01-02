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
  constructor(private router: Router) { }

  ngOnInit(): void {
    const user = localStorage.getItem('felhasznalo');
    if (user) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['home']);
  }
}
}
