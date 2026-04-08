import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar-component/navbar-component';
import { HeroComponent } from '../components/hero-component/hero-component';
import { ContentComponent } from '../components/content-component/content-component';

@Component({
  selector: 'app-home-component',
  imports: [NavbarComponent , HeroComponent, ContentComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {}
