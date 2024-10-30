import { Component } from '@angular/core';
import { NavComponent } from '../../../components/nav/nav.component';
import { HeroComponent } from '../../../components/hero/hero.component';
import { InfoComponent } from '../../../components/info/info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    InfoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
