import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  email: string | null = null;

  constructor(private authService: AuthService, ) {

    this.authService.getEmail().subscribe(
      (data: { email: string | null; }) => {
        this.email = data.email;
      },
      (error: any) => {
        console.error('Hiba az email lekérésekor:', error);
      }
    );
  }
}

