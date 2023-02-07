import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  isMenuShow = false;

  constructor(private router: Router) {
    const blur = document.querySelector('body');

    router.events.subscribe((val) => {
      if ($('script[src="../assets/js/animate.js"]').length > 0) {
        $('script[src="../assets/js/animate.js"]').remove();
        $("body").append('<script src="../assets/js/animate.js"></script>');
      }


      $("body").css({
        overflow: "hidden",
      });

      setTimeout(() => {
        $("body").css({
          overflow: "visible",
        });
        $("#cursor").css({
          backgroundColor: "rgba(0, 0, 0, 0)",
          opacity: "1",
          transform: "translateX(-50%) translateY(-50%) scale(1)",
        });

        $("#dot").css({
          opacity: "1",
        });
      }, 1000);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);

      if (router.url !== '/') {
        blur.classList.add('blur')
      }
      else if (router.url === '/') {
        if (blur.classList.contains('blur')) {
          blur.classList.remove('blur')
        }
      }
    });
  }

  btnMenu() {
    this.isMenuShow = !this.isMenuShow
  }

  ngOnInit(): void {
    $("body").append('<script src="../assets/js/animate.js"></script>');
  }
}
