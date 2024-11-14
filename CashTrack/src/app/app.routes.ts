import { Routes } from '@angular/router';
import { FelhasznalokComponent } from './components/felhasznalok/felhasznalok.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path:'',component:FelhasznalokComponent
    },
    {
        path:'login', component:LoginComponent
    }

    
];
