import { Component } from '@angular/core';
import { routerTransition } from '../../_animations/fade-in.animation';
                                                                                                                                  
@Component({
  styleUrls: [`about.component.scss`],
  templateUrl: 'about.component.html',
  animations: [ routerTransition ],
  host: { '[@routerTransition]': ''}
})

export class AboutComponent {

}