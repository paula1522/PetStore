import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../shared/header/header.component";
import { CardComponent } from "../../shared/atomicDesign/molecules/card/card.component";
import { ButtonComponent } from "../../shared/atomicDesign/atoms/button/button.component";

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss'
})
export class PetsComponent {

}
