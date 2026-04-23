import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero-component/hero-component';
import { ContentComponent } from '../components/content-component/content-component';
import { BaseControl } from '../../../core/base/base-control';

@Component({
  selector: 'app-home-component',
  imports: [HeroComponent, ContentComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent extends BaseControl {}
