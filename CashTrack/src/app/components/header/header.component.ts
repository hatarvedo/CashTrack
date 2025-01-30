import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  private subscription: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  
}
