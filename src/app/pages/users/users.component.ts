import { Component } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserDetailComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
