import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  standalone: true,
  imports: [],
  templateUrl: './pet-edit.component.html',
  styleUrl: './pet-edit.component.scss'
})
export class PetEditComponent {
  private route = inject(ActivatedRoute);
petId: any;
ngOnInit() {

    // Obtiene el parámetro una sola vez
  this.petId = this.route.snapshot.paramMap.get('petId');

  console.log('Pet ID:', this.petId);

  }
}
