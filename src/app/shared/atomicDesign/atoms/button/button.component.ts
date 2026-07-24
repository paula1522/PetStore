import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() text: string = '';
  @Input() icon = '';

  @Input() type: 'button' | 'submit' = 'button';

  @Input() disabled: boolean = false;

@Input() variant: 'primary' | 'secondary' | 'icon' | 'menu' = 'primary';
@Input() routerLink?: string | any[];
  @Input() fullWidth = true;
  @Output() buttonClick = new EventEmitter<void>();

}
