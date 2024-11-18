import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  email: string | null = null;

  constructor(private authService: AuthService, ) {
    // Az auth service itt van injektálva, és itt kérjük le az emailt
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

