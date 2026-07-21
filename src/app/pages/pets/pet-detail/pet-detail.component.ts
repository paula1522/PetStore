import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [],
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
