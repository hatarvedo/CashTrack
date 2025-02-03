import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,HeaderComponent,HttpClientModule],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CashTrack';
  constructor(private router: Router, private authService: AuthService) { }

  /* ngOnInit(): void {
    const user = localStorage.getItem('felhasznalo');
    if (user) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['home']);
  } 
}*/
}
