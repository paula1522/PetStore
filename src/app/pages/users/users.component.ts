import { Component } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TableComponent } from "../../shared/atomicDesign/atoms/table/table.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterOutlet } from "@angular/router";
import { ButtonComponent } from "../../shared/atomicDesign/atoms/button/button.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
