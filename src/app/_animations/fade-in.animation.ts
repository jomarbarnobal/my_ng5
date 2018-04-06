import { 
  trigger, 
  stagger, 
  state, 
  query, 
  animate, 
  transition, 
  style, 
  sequence,
  group,
  animateChild } from '@angular/animations';


// const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [

transition('* => *', [
  query(':enter, :leave', style({ 
    position: 'fixed',
    color: '#fff',
    left: 0,
    right: 0
  }), { optional: true} ),
  query(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateY(50px)'}),
      animate('700ms ease-in', style({
        transform: 'translateY(0)',
        opacity: 1
        }))
      ],{ optional: true}),
    sequence([
      query(':leave', animateChild(),{ optional: true}),
      group([
        query(':leave', [
          animate('300ms ease-in', 
            style({ 
              transform: 'translateY(-15%)',
              opacity: 0
            }))
        ],{ optional: true}),    
        query(':enter', [
          animate('700ms ease-in', 
            style({ transform: 'translateY(0)' }))
        ],{ optional: true})
      ]),
      query(':enter', animateChild(),{ optional: true})
    ])
  ])
]);