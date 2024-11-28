import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ProfileComponent } from './shared/profile/profile.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
        children: [
            {
                path: 'profile',
                component: ProfileComponent,
                title: 'Profile Page'
            }
        ]
    },
    {
        path: 'auth',
        loadComponent: () => import('./auth/login/login.component').then((m) => m.LoginComponent),
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'register',
                loadComponent: () => import('./auth/register/register.component').then((m) => m.RegisterComponent)
            },
        ]
    }
    
];
