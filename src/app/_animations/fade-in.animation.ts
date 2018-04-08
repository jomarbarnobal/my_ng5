import { 
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const routerTransition = trigger('routerTransition',[
  state('*', style({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  })),
  transition(':enter', [
    style({
      transform: 'translateY(100px)',
      opacity: 0
    }),
    animate('500ms ease-in', style({
      transform: 'translateY(0)',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate('400ms ease-in', style({
      opacity: 0,
      transform: 'translateY(10%)'  
    }))
  ])
])

