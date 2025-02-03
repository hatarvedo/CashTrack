import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterLink],
  providers: [PostService,HttpClient,Router],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  vezeteknev: string = '';
  keresztnev: string = '';
  email: string = '';
  password: string = '';
  constructor(private postService: PostService, private router: Router, private http: HttpClient,private authService: AuthService) { }

  onSubmit(): void {
    console.log('onsubmit fuggveny');
    const userData = { vezeteknev: this.vezeteknev,
      keresztnev: this.keresztnev,
      email: this.email,
      jelszo: this.password };
    this.postService.registerUser(userData).subscribe((response)=>{
      console.log(response);
      if(response){
        alert('Sikeres regisztráció');
        this.router.navigate(['login']);
        /* localStorage.setItem('felhasznalo',JSON.stringify(response)); */
        
      }
      else{
        alert('Sikertelen regisztráció');
      }
    });
  }

}
