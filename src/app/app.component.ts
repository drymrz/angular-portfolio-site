import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myElementScript: HTMLScriptElement;

  constructor() {
    this.myElementScript = document.createElement('script');
    this.myElementScript.src = '../assets/js/animate.js';
    document.body.appendChild(this.myElementScript);
  }

  ngOnInit(): void {}
}
