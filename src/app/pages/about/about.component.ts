import { Component } from '@angular/core';
import { fadeInApp } from '../../_animations/fade-in.animation'
                                                                                                                                  
@Component({
  styleUrls: [`about.component.scss`],
  templateUrl: 'about.component.html',
  animations: [ fadeInApp ],
  host: {'[@fadeInApp]': ''}
})

export class AboutComponent {

}