import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

import { authGuard } from './core/guards/auth.guard';

import { usersRoutes } from './pages/users/users.routes';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
      data: { showHeader: false }

  },

  {
    path: 'register',
    component: RegisterComponent,
      data: { showHeader: false }

  },

  {
    path: '',
    canActivate: [authGuard],
      data: { showHeader: true },

    children: [

      {
        path: 'home',
        component: HomeComponent
      },

      /*{
        path: 'pets',
        component: PetsComponent,
        children: petsRoutes
        
      },*/
      {
        path: 'pets',
        loadComponent:() => import('./pages/pets/pets.component') .then(m => m.PetsComponent),
        loadChildren:() => import('./pages/pets/pets.routes') .then(m => m.petsRoutes)
      },

      {
        path: 'users',
        component: UsersComponent,
        children: usersRoutes,
      }

    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];