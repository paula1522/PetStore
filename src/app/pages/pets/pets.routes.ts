import { Routes } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { FindByStatusComponent } from './find-by-status/find-by-status.component';
import { FindByTagsComponent } from './find-by-tags/find-by-tags.component';
import { authGuard } from '../../core/guards/auth.guard';


export const petsRoutes: Routes = [
  {
    path: '',
    component: PetListComponent
  },
  {
    path: 'create',
    component: PetCreateComponent,
    canActivate:[authGuard]
  },
  {
    path: ':petId',
    component: PetDetailComponent
  },
  {
    path: ':petId/edit',
    component: PetEditComponent
  },
  {
    path: ':petId/upload-image',
    component: UploadImageComponent
  },
  {
    path: 'status',
    component: FindByStatusComponent
  },
  {
    path: 'tags',
    component: FindByTagsComponent
  }
];