import { Routes } from '@angular/router';
import { FelhasznalokComponent } from './components/felhasznalok/felhasznalok.component';
import { LoginComponent } from './components/login/login.component';
import { KapcsolatComponent } from './components/kapcsolat/kapcsolat.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:'kapcsolat',component:KapcsolatComponent
    },
    {
        path:'register',component:RegisterComponent
    }

    
];
