import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInApp = trigger('fadeInApp', [
  state('*', style({
    position: 'absolute',
    color: 'rgba(0,0,0,0.87)',
    top: 0,
    left: 0,
    right: 0
  })),
  transition(':enter', [
    style({
      transform: 'translateY(20%)',
      opacity: 0
    }),
    animate('1500ms ease-in', style({
      transform: 'translateY(0%)',
      opacity: 1,
    }))
  ]),
  transition(':leave', [
      animate('800ms ease-in', style({
      opacity: 0,
      transform: 'translateY(10%)',
      }))
  ])
])