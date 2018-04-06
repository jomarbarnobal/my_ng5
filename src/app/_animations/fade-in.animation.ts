import { 
  trigger, 
  stagger, 
  state, 
  query as q, 
  animate, 
  transition, 
  style, 
  sequence,
  group,
  animateChild } from '@angular/animations';

// export const fadeInApp = trigger('fadeInApp', [
//   state('*', style({
//     position: 'fixed',
//     color: '#fff',
//     top: 0,
//     left: 0,
//     right: 0,
//   })),
//   transition(':enter', [
//     style({
//       transform: 'translateY(100px)',
//       opacity: 0
//     }),
//     animate('1500ms ease-in', style({
//       transform: 'translateY(0%)',
//       opacity: 1,
//     }))
//   ]),
//   transition(':leave', [
//     animate('800ms ease-in', style({
//       opacity: 0,
//       transform: 'translateY(10%)',
//     })),
//   ]),
// ])
const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ 
    position: 'fixed',
    color: '#fff',
    // top: 0,
    left: 0,
    right: 0, 
  })),
  query(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateY(50px)'}),
      animate('700ms ease-in', style({
        transform: 'translateY(0px)',
        opacity: 1,
        }))
      ]),
    sequence([
      query(':leave', animateChild()), 
      group([
        query(':leave', [
          // style({ transform: 'translateY(0px)' }),
          animate('300ms ease-in', 
            style({ 
              transform: 'translateY(-15%)',
              opacity: 0
            }))
        ]),    
        query(':enter', [
          // style({ transform: 'translateY(10%)' }),
          animate('700ms ease-in', 
            style({ transform: 'translateY(0px)' })),
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);