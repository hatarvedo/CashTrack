import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [RouterLink,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
}
