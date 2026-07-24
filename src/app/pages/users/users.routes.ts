import { Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { authPerfilGuard } from '../../core/guards/auth-perfil.guard';
import { UsersComponent } from './users.component';

export const usersRoutes: Routes = [
    {
    path: '',
    component: UsersComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 11 }
  },
  {
    path: 'list',
    component: UserListComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 12 }
  },
  {
    path: 'create',
    component: UserCreateComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 13 }
  },
  {
    path: 'detalle',
    component: UserDetailComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 18 }
  }
];