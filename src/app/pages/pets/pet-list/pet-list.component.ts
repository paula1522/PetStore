import { Component, inject } from '@angular/core';
import { PetsService } from './../../../services/api/pets.service';
import { GetPetsResponse } from '../../../core/models/GetPets.model';
import { TableComponent } from "../../../shared/atomicDesign/atoms/table/table.component";
import { ButtonComponent } from "../../../shared/atomicDesign/atoms/button/button.component";

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [TableComponent, ButtonComponent],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.scss'
})
export class PetListComponent {

  private petsService = inject(PetsService);

  titulos = ['ID', 'NOMBRE', 'ESPECIE', 'ESTADO'];
  columnas = ['id', 'nombre', 'especie', 'estado'];

  Mascotas: GetPetsResponse[] = [];
  todasLasMascotas: GetPetsResponse[] = [];

  ngOnInit() {
    this.listarMascotas();
  }

  listarMascotas() {
    this.petsService.listarPets().subscribe({
      next: (response) => {
        console.log("Respuesta del servicio");

        this.Mascotas = response;
        /*this.todasLasMascotas = [...response];*/
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  mostrarPendientes() {
    /*this.Mascotas = this.todasLasMascotas.filter(
      mascota => mascota.estado === "pending"
    );*/
    this.Mascotas.push({
    id: 9,
    nombre: "toffy",
    especie: "perro",
    estado: "pending"

});

  }

  mostrarPerros() {
    this.Mascotas = this.todasLasMascotas.filter(
      mascota => mascota.especie === "Perro"
    );
  }

 limpiar() {
  this.Mascotas = this.todasLasMascotas;
}



}