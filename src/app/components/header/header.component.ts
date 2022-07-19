import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { trigger, transition, animate, style, query, stagger, state } from '@angular/animations';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition('void => *', [
        query('.logo,.menu-icon', [
          style({ opacity: 0, transform: 'translateY(-96px) translateZ(0)' }),
          stagger(-50, [
            animate('400ms 0.9s cubic-bezier(0.4, 0.55, 0.265, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ]),
      transition('* => void', [
        query('.logo,.menu-icon', [
          style({ opacity: 1, transform: 'none' }),
          stagger(50, [
            animate('400ms 0.2s cubic-bezier(0.4, 0.55, 0.265, 1)', style({ opacity: 0, transform: 'translateY(-96px) translateZ(0)' }))
          ])
        ])
      ])
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  @Output() btnMenu = new EventEmitter();
  isMenuShow = false;
  animateMenu = false;


  constructor(private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      if (router.url !== '/menu') {
        const checkbox = document.getElementById(
          'click'
        ) as HTMLInputElement | null;
        if (checkbox != null) {
          checkbox.checked = false;
        }
      }
      else if (router.url === '/menu') {
        const checkbox = document.getElementById(
          'click'
        ) as HTMLInputElement | null;
        if (checkbox != null) {
          checkbox.checked = true;
        }
      }
    })
  }
  @HostBinding('@pageAnimations')

  routerMenu() {
    const checkbox = document.getElementById(
      'click'
    ) as HTMLInputElement | null;

    if (this.router.url !== '/menu') {
      this.router.navigate(['/menu'])
      if (checkbox != null) {
        checkbox.checked = true;
      }
    } else {
      if (checkbox != null) {
        checkbox.checked = false;
      }
      this.location.back();
    }
  }


  ngOnInit(): void { }
}
