import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../shared/atomicDesign/atoms/button/button.component";

@Component({
  selector: 'app-pet-create',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pet-create.component.html',
  styleUrl: './pet-create.component.scss'
})
export class PetCreateComponent {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  cliente: any;

  ngOnInit() {

    console.log(`ngOnInit: En este componente estoy obteniendo el objeto "cliente" que fue cargado por el Resolver de la ruta mediante ActivatedRoute.data.`);

    this.route.data.subscribe(({ cliente }) => {

      this.cliente = cliente;

      console.log("Cliente recibido desde el Resolver:", this.cliente);

    });

  }

  irDetalle() {

    console.log(`Navegando a PetDetail.Estoy enviando el objeto "cliente" mediante Route State.`);

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

    console.log(`Navegando a PetEdit.Estoy enviando el ID de la mascota como parámetro de la ruta Route Path.`);

    this.router.navigate([
      '/pets',
      67,
      'edit'
    ]);

  }

}