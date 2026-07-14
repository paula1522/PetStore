import { Routes } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { FindByStatusComponent } from './find-by-status/find-by-status.component';
import { FindByTagsComponent } from './find-by-tags/find-by-tags.component';
import { authGuard } from '../../core/guards/auth.guard';
import { authPerfilGuard } from '../../core/guards/auth-perfil.guard';


export const petsRoutes: Routes = [
  {
    path: '',
    component: PetListComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 1 }
  },
  {
    path: 'create',
    component: PetCreateComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 2 }
  },
  {
    path: ':petId',
    component: PetDetailComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 1 }
  },
  {
    path: ':petId/edit',
    component: PetEditComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 3 }
  },
  {
    path: ':petId/upload-image',
    component: UploadImageComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 7 }
  },
  {
    path: 'status',
    component: FindByStatusComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 5 }
  },
  {
    path: 'tags',
    component: FindByTagsComponent
  }
];