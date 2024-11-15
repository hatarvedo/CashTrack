import { Component } from '@angular/core';
import { _AdatokService } from '../../service/adatok.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) { }
  vezeteknev: string = '';
  keresztnev: string = '';


  email: string = '';
    password: string = '';
    errorMessage: string = '';
  
  
  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Sikeres belépés esetén
        console.log('Sikeres belépés', response);
        this.router.navigate(['/home']); // Navigálj a főoldalra, ha sikeres a belépés
      },
      (error) => {
        // Hiba esetén
        console.error('Hiba a belépés során', error);
        this.errorMessage = 'Hibás felhasználónév vagy jelszó.';
      }
    );
  } }


