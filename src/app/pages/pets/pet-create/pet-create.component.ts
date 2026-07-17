import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../shared/atomicDesign/atoms/button/button.component";

@Component({
  selector: 'app-pet-create',
  standalone: true,
  imports: [ ButtonComponent],
  templateUrl: './pet-create.component.html',
  styleUrl: './pet-create.component.scss'
})
export class PetCreateComponent {

private route = inject(ActivatedRoute);
private router = inject(Router);

 cliente: any;
ngOnInit() {
  this.route.data.subscribe(({cliente})=>{
    console.log(cliente)
    this.cliente=cliente;
  })
}

irDetalle() {
  console.log('Entró al botón');

  this.router.navigate(
    ['/pets', 67],
    {
      state: {
        usuario: this.cliente
      }
    }
  );
}

irDetallePath() {
  console.log('Enviando petId por path');

  this.router.navigate([
    '/pets',
    67,
    'edit'
  ]);
}

 
}
