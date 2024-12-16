import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  vezetekNev: string = '';
  keresztNev: string = '';
  email: string = '';
  password: string = '';

  constructor(private postService: PostService) { }

  onSubmit() {
    const userData = {
      vezetekNev:  this.vezetekNev,
      keresztNev: this.keresztNev,
      email: this.email,
      password: this.password
    };

    this.postService.registerUser(userData).subscribe(
      response => {
        console.log('Registration successful:', response);
      },
      error => {
        console.error('Registration failed:', error);
      }
    );
}}
