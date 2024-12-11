import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormBuilder,FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

 
  // Hibajelzés
  errorMessage: string = '';

    email: string = '';
    password: string = '';
    passwordConfirm: string = '';
    
   
    loginForm: FormGroup;

    
  
    constructor(private fb:FormBuilder,  private authService: AuthService, private router: Router, private http: HttpClient) {
      this.loginForm = this.fb.group({
        email:['',[Validators.required]],
        password :['',[Validators.required,],Validators.minLength(3)]
      })
     }
     ngOnInit(): void {
       
     }
     onSubmit(): void{
      
      this.http.post('http://127.0.0.1:8000/api/belepes', {email:this.email, jelszo: this.password}).subscribe((res: { message: string, error: string } | any) => {
        console.log(res);
        if(res.message === 'Sikeres belépés'){
            this.router.navigate(['/manager']);
            alert('sikeres login'); 
        }
        else{
          console.log((response as any).error);
        }
        
      });
     }
    } 

  



  