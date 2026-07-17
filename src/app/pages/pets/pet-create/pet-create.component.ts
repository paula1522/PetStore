import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-pet-create',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './pet-create.component.html',
  styleUrl: './pet-create.component.scss'
})
export class PetCreateComponent {

private route = inject(ActivatedRoute);
 cliente: any;
ngOnInit() {
  this.route.data.subscribe(({cliente})=>{
    console.log(cliente)
    this.cliente=cliente;
  })
}
 
}
