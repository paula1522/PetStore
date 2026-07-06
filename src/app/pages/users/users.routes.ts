import { Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

export const usersRoutes: Routes = [
  {
    path: '',
    
    component: UserListComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: ':id',
    component: UserDetailComponent
  }
];