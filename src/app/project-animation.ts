import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

export const projectAnimation = trigger('projectAnimations', [
    transition('void => *', [
        query('.next-project,.project-content,.header-project,.project-description,.project-data,.project-title', [
            style({ opacity: 0, transform: 'translateY(-96px) translateZ(0)' }),
            stagger(-50, [
                animate('600ms 0.7s cubic-bezier(0.4, 0.55, 0.265, 1)', style({ opacity: 1, transform: 'none' }))
            ])
        ])
    ]),
    transition('* => void', [
        query('.next-project,.project-content,.project-description,.project-data,.project-title,.header-project', [
            style({ opacity: 1, transform: 'none' }),
            stagger(50, [
                animate('400ms 0.2s cubic-bezier(0.4, 0.55, 0.265, 1)', style({ opacity: 0, transform: 'translateY(-96px) translateZ(0)' }))
            ])
        ])
    ])
])

