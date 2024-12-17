import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [RouterLink,FormsModule,HttpClientModule],
  providers: [HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email:string = '';
  jelszo: string = '';
  constructor( private http: HttpClient, private router: Router) { }

  onSubmit(): void {
    console.log('Login fuggveny');
    const userData = {email:this.email,jelszo:this.jelszo};
    this.http.get(`http://127.0.0.1:8000/api/felhasznalok/email/${this.email}`).subscribe((response:any)=>{
      if(userData.email === response.email && userData.jelszo === response.jelszo){
        console.log('Sikeres bejelentkezés');
        this.router.navigate(['dashboard']);
      }
      else{
        console.log('Sikertelen bejelentkezés, hibás email vagy jelszó.');
      }
      
    })
    
  }
}
