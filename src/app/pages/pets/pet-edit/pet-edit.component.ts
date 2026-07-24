import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ButtonComponent } from "../../../shared/atomicDesign/atoms/button/button.component";
import { CardComponent } from '../../../shared/atomicDesign/molecules/card/card.component';

@Component({
  selector: 'app-pet-edit',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './pet-edit.component.html',
  styleUrl: './pet-edit.component.scss'
})
export class PetEditComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private destrtoy$ = new Subject<void>;
  petId: any;
  
  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.petId = params.get('petId')!;

      console.log('Pet ID:', this.petId);

    });

  }


  ngOnDestroy(){
    this.destrtoy$.next();
    this.destrtoy$.complete();
        console.log('Componente destruido y desuscrito');

  }
}