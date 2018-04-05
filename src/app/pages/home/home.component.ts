import { Component } from '@angular/core';
import { AnimationBuilder } from 'css-animator/builder';
import { fadeInApp } from '../../_animations/fade-in.animation';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [`home.component.scss`],
  animations: [ fadeInApp ],
  host: {'[@fadeInApp]': ''}
})

export class HomeComponent {
  
}