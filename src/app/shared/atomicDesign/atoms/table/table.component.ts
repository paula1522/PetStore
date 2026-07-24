import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent /*implements OnChanges*/ {
  @Input() titulosTabla: string[] = [];
  @Input() nombreColumnas: string[] = [];
  @Input() dataSource: any[] = [];
 filtrado: any[]=[];

 ngOnChanges(changes: SimpleChanges): void {

  console.log(changes);
  console.log(this.dataSource);
  console.log(this.filtrado == this.dataSource);
  this.filtrado = this.dataSource;
  console.log(this.filtrado == this.dataSource);

}



}
