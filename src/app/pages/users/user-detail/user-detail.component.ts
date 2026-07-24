import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/logic/auth.service';
import { ButtonComponent } from "../../../shared/atomicDesign/atoms/button/button.component";

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  public authService = inject(AuthService);

}
