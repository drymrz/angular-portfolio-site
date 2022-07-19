import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  trigger,
  transition,
  animate,
  style,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition('void => *', [
        query('.link-wrapper, h6 , #head', [
          style({ opacity: 0, transform: 'translateY(-96px) translateZ(0)' }),
          stagger(-50, [
            animate(
              '400ms 0.7s cubic-bezier(0.4, 0.55, 0.265, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
      transition('* => void', [
        query('.link-wrapper, h6 , #head', [
          style({ opacity: 1, transform: 'none' }),
          stagger(50, [
            animate(
              '400ms 0.2s cubic-bezier(0.4, 0.55, 0.265, 1)',
              style({
                opacity: 0,
                transform: 'translateY(-96px) translateZ(0)',
              })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Contact - Adry Mirza');
  }

  @HostBinding('@pageAnimations')
  ngOnInit(): void {}
}
