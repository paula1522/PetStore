import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';

  @Input() label: string = '';

  @Input() placeholder: string = '';



}
