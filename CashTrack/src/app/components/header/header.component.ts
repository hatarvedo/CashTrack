import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  providers: [AuthGuardService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public authGuardService: AuthGuardService) {}

}
