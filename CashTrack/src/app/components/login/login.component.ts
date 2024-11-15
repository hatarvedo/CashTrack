import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    errorMessage: string = '';
  
    constructor(private authService: AuthService, private router: Router) { }
  
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

  



