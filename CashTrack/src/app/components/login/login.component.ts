import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  imports: [RouterLink,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
}
