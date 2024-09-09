import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  query,
  stagger,
} from '@angular/animations';
import { Title } from '@angular/platform-browser';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition('void => *', [
        query('.link-wrapper, #intro', [
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
        query('.link-wrapper, #intro', [
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
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Home - Adry Mirza');
  }
  @HostBinding('@pageAnimations')
  ngOnInit(): void {}
}
