import { Routes } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { FindByStatusComponent } from './find-by-status/find-by-status.component';
import { FindByTagsComponent } from './find-by-tags/find-by-tags.component';
import { authPerfilGuard } from '../../core/guards/auth-perfil.guard';
import { clienteResolver } from './cliente-resolver.resolver';
import { PetsComponent } from './pets.component';


export const petsRoutes: Routes = [
  {
    path: '',
    component: PetsComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 1 }
  },
  {
    path: 'list',
    component: PetListComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 1 }
  },
  {
    path: 'create',
    component: PetCreateComponent,
    canActivate: [authPerfilGuard],
    data: { permiso: 2 },
    resolve:{cliente: clienteResolver}
  },
  {
    path: 'detalle',
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