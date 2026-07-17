import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../shared/atomicDesign/atoms/button/button.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.scss'
})
export class PetDetailComponent {
private route = inject(ActivatedRoute);
usuario:any;
  petId: any;
ngOnInit() {
    // Accedemos al estado pasado en la navegación
    this.usuario = history.state.usuario;
    console.log(this.usuario);

  }
}
