import { Component } from '@angular/core';
import { routerTransition } from '../../_animations/fade-in.animation';


@Component({
  templateUrl: 'project.component.html',
  styleUrls: [`project.component.scss`],
  animations: [ routerTransition ],
  host: { '[@routerTransition]': '' }
})

export class ProjectComponent {

}