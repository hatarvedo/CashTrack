import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [RouterLink,FormsModule,HttpClientModule],
  providers: [HttpClient,LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email:string = '';
  jelszo: string = '';
  
  constructor( private http: HttpClient, private router: Router, private loginService: LoginService) { }

  onSubmit(): void {
    console.log('Login fuggveny');
    const userData = {email:this.email,jelszo:this.jelszo};
    this.loginService.login(this.email,this.jelszo).subscribe((response:any)=>{
      if(this.email === response.email && this.jelszo === response.jelszo){
        console.log('Sikeres bejelentkezés');
        localStorage.setItem('felhasznalo',JSON.stringify(response));
        console.log('Felhasználó adatai: ',response);
        this.router.navigate(['dashboard']);

      }
      else{
        console.log('Sikertelen bejelentkezés, hibás email vagy jelszó.');
        alert('Sikertelen bejelentkezés, hibás email vagy jelszó.');
      }
    }
    );
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
