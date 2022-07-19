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

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition('void => *', [
        query('h1', [
          style({ opacity: 0, transform: 'translateY(-96px) translateZ(0)' }),
          stagger(-50, [
            animate(
              '400ms 0.6s cubic-bezier(0.4, 0.55, 0.265, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
      transition('* => void', [
        query('h1', [
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
export class MenuComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Menu - Adry Mirza');
  }
  @HostBinding('@pageAnimations')
  ngOnInit(): void {}
}
