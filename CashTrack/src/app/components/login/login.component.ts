import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormBuilder,FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Az előre definiált helyes jelszó

  
  // Felhasználó által megadott jelszó
  
  //Előre megadott email
 /*  correctEmail = 'http:/127.0.0.1/api/felhasznalo/s */
  
  // Hibajelzés
  errorMessage: string = '';

    email: string = '';
    password: string = '';
   
    loginForm: FormGroup;
    
  
    constructor(private fb:FormBuilder,  private authService: AuthService, private router: Router) {
      this.loginForm = this.fb.group({
        email:['',[Validators.required]],
        password :['',[Validators.required,],Validators.minLength(3)]
      })
     }
  
    onLogin(): void {
      /* if (this.password === && this.email )
      }
      if(this.loginForm.valid){
        this.authService.login(this.email, this.password).subscribe(
          (response) => {
            // Sikeres belépés esetén
            console.log('Sikeres belépés', response);
            this.router.navigate(['/manager']); 
          },
          (error) => {
            // Hiba esetén
            console.error('Hiba a belépés során', error);
            this.errorMessage = 'Hibás felhasználónév vagy jelszó.';
          }
        ); */
      }
     
    } 

  



