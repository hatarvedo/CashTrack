import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { KapcsolatComponent } from './components/kapcsolat/kapcsolat.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';


export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'kapcsolat',component:KapcsolatComponent
    },
    {
        path:'register',component:RegisterComponent
    },
    {
        path:'rolunk',component:AboutComponent
    },
    { 
        path: '**', component:HomeComponent

    }
   

];
