import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pnf',
  templateUrl: './pnf.component.html',
  styleUrls: ['./pnf.component.scss']
})
export class PnfComponent implements OnInit {

  constructor() { }

  redirectToMain() {
    setTimeout(() => {
      let ref = document.getElementById('rdr');
      ref.click();
    }
      , 6000);
  }

  ngOnInit(): void {
    this.redirectToMain()
    $(".header").removeClass("black")
    $("body").addClass("lock")
  }

}
