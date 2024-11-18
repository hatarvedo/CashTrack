import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  email: string | null = null;
  constructor(private authService: AuthService) {
    ngOnInit(): void {
      this.userService.getEmail().subscribe(
        (data: { email: string | null; }) => {
          this.email = data.email;
        },
        (error: any) => {
          console.error('Hiba az email lekérésekor:', error);
        }
      )
    }
   }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

