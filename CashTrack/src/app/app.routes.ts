import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { KapcsolatComponent } from './components/kapcsolat/kapcsolat.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';


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
        path:'dashboard',canActivate:[AuthGuardService], component:DashboardComponent
    },
    { 
        path: '**', component:HomeComponent

    }
    
   

];
