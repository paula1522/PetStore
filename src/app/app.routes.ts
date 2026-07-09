import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';

import { PetsComponent } from './pages/pets/pets.component';
import { UsersComponent } from './pages/users/users.component';

import { authGuard } from './core/guards/auth.guard';

import { petsRoutes } from './pages/pets/pets.routes';
import { usersRoutes } from './pages/users/users.routes';
import { authPerfilGuard } from './core/guards/auth-perfil.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent
  },

  {
    path: 'pets',
    component: PetsComponent,
    canActivate: [authGuard],
    children: petsRoutes
  },

  {
    path: 'users',
    component: UsersComponent,
    canActivate: [authPerfilGuard],
    children: usersRoutes
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];