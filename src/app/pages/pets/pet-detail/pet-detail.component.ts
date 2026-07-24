import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "../../../shared/atomicDesign/molecules/card/card.component";
import { ButtonComponent } from "../../../shared/atomicDesign/atoms/button/button.component";

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.scss'
})
export class PetDetailComponent implements OnInit {
usuario:any;
ngOnInit() {
    // Accedemos al estado pasado en la navegación
    this.usuario = history.state.usuario;
    console.log(this.usuario);

  }
}
