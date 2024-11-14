import { Component } from '@angular/core';
import { _AdatokService } from '../../service/adatok.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private adatokService: _AdatokService) { }

  insertData() {
}

}
