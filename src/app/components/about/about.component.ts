import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  query,
  stagger,
} from '@angular/animations';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition('void => *', [
        query('.resume-link,.presentation-text,.about-right, #about', [
          style({
            opacity: 0,
            transform: 'translateY(-96px) translateZ(0)',
            overflowY: 'hidden',
          }),
          stagger(-50, [
            animate(
              '500ms 0.7s cubic-bezier(0.4, 0.55, 0.265, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
      transition('* => void', [
        query('.resume-link,.presentation-text,.about-right, #about', [
          style({ opacity: 1, transform: 'none' }),
          stagger(50, [
            animate(
              '400ms 0.2s cubic-bezier(0.4, 0.55, 0.265, 1)',
              style({
                opacity: 0,
                transform: 'translateY(-96px) translateZ(0)',
                overflowY: 'hidden',
              })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('About - Adry Mirza');
  }
  @HostBinding('@pageAnimations')
  ngOnInit(): void {}
}
