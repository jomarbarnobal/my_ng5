import { Component } from '@angular/core';
import { routerTransition } from './_animations/fade-in.animation'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent  {

  getState(outlet){
    return outlet.activatedRouteData.state;
  }
}