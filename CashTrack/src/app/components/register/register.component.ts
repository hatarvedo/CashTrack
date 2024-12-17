import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule,],
  providers: [PostService,HttpClient,Router],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  vezeteknev: string = '';
  keresztnev: string = '';
  email: string = '';
  password: string = '';
  constructor(private postService: PostService, private router: Router) { }
  /* constructor(private http: HttpClient) { } */
  onSubmit(): void {
    console.log('onsubmit fuggveny');
    const userData = { vezeteknev: this.vezeteknev,
      keresztnev: this.keresztnev,
      email: this.email,
      jelszo: this.password };
    this.postService.registerUser(userData).subscribe((response)=>{
      console.log(response);
      if(response.success === true){
        alert('Sikeres regisztráció');
        this.router.navigate(['/dashboard']);
      }
      else{
        alert('Sikertelen regisztráció');
      }
    });
    /* this.http.post('http://127.0.0.1:8000/api/felhasznalok', userData).subscribe((response:any)=>{
      console.log('Sikeres Regisztráció',response);  
    },
    error=>{
      console.error('sikertelen Regisztráció',error);
    }); */
    
  
  }

}
