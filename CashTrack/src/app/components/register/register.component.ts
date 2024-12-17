import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterModule,HttpClientModule],
  providers: [PostService,HttpClient],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  vezeteknev: string = '';
  keresztnev: string = '';
  email: string = '';
  password: string = '';
  constructor(private postService: PostService) { }
  /* constructor(private http: HttpClient) { } */
  onSubmit(): void {
    console.log('onsubmit fuggveny');
    const userData = { vezeteknev: this.vezeteknev,
      keresztnev: this.keresztnev,
      email: this.email,
      jelszo: this.password };
    this.postService.registerUser(userData).subscribe((response)=>{
      console.log(response);
    });
    /* this.http.post('http://127.0.0.1:8000/api/felhasznalok', userData).subscribe((response:any)=>{
      console.log('Sikeres Regisztráció',response);  
    },
    error=>{
      console.error('sikertelen Regisztráció',error);
    }); */
    
  
  }

}
