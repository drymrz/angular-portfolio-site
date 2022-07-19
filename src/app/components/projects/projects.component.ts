import { Component, OnInit, HostBinding } from '@angular/core';
import * as $ from 'jquery';
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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition('void => *', [
        query('li, #head, .projects-left-inside', [
          style({ opacity: 0, transform: 'translateY(-96px) translateZ(0)' }),
          stagger(-50, [
            animate(
              '500ms 0.7s cubic-bezier(0.4, 0.55, 0.265, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
      transition('* => void', [
        query('li, #head, .projects-left-inside', [
          style({ opacity: 1, transform: 'none' }),
          stagger(50, [
            animate(
              '500ms 0.2s cubic-bezier(0.4, 0.55, 0.265, 1)',
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
export class ProjectsComponent implements OnInit {
  hover = 0;
  constructor(private titleService: Title) {
    titleService.setTitle('My Projects - Adry Mirza');
  }
  @HostBinding('@pageAnimations')
  ngOnInit(): void {
    if ($(window).innerWidth() >= 980 && $(window).innerWidth() <= 1660) {
      $(':root').css({ '--left-right-margin': '200px' });
      $('.projects-category').css({ 'padding-right': '5px' });
    }
  }
}
