import { trigger, transition, animate, style, query, AnimationEvent } from '@angular/animations';

export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('VideoRetrieval <=> VideoEditor', [
      query(':leave',)
    ])
  ])

