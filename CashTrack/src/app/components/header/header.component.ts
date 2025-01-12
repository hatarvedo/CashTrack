import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  providers: [AuthGuardService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  loggedIn: boolean = false;
  constructor(public authGuardService: AuthGuardService, private authService:AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(status => this.loggedIn = status);
  }


  
}
