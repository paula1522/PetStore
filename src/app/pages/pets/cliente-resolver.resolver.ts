import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { UserService } from '../../services/api/user.service';
import { GetUserRequest } from '../../core/models/GetUser.model';
import { catchError, EMPTY, tap } from 'rxjs';

export const clienteResolver: ResolveFn<GetUserRequest> = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  let request: GetUserRequest = {
    username: "sofia"
  };
  return userService.UserGet(request)
    .pipe(

      catchError((error) => {
        router.navigate(['/home']);
        return EMPTY;
      }

      ))

};
