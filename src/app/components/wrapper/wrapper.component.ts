import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll > $(window).height()) {
        $(".header").addClass("black");
        $(".arrow-back").addClass("black");
      }
      else {
        $(".arrow-back").removeClass("black");
        $(".header").removeClass("black");
      }
    });
  }

}
