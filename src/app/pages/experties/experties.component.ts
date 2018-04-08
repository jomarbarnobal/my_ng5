import { Component } from '@angular/core';
import { routerTransition } from '../../_animations/fade-in.animation';
@Component({
  templateUrl: 'experties.component.html',
  styleUrls: [`experties.component.scss`],
  animations: [ routerTransition ],
  host: { '[@routerTransition]': ''}
})

export class ExpertiesComponent {

}