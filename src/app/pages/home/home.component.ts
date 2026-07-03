import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { HeroComponent } from "../../shared/hero/hero.component";
import { GalleryComponent } from "../../shared/gallery/gallery.component";
import { ProcessComponent } from "../../shared/process/process.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ProcessComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
