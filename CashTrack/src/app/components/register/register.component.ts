import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  
  vezetekNev: string = '';
  keresztNev: string = '';
  email: string = '';
  password: string = '';
  constructor(private postService: PostService) { }
  onSubmit(): void {
    console.log('onsubmit fuggveny');
    const userData = { vezetekNev: this.vezetekNev,
      keresztNev: this.keresztNev,
      email: this.email,
      password: this.password };
    this.postService.registerUser(userData).subscribe((response)=>{
      console.log(response);
    });
  }

}
