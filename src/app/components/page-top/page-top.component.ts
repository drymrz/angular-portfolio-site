import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss'],
})
export class PageTopComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function () {
      $('.landing').removeClass('none');
    });

    $('.header').removeClass('black');
  }
}
