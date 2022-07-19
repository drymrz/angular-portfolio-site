import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projectAnimation } from '../../../project-animation';
@Component({
  selector: 'app-pabp',
  templateUrl: './pabp.component.html',
  styleUrls: ['./pabp.component.scss'],
  animations: [projectAnimation],
})
export class PabpComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Project - PABP SMKN 7 BATAM');
  }
  @HostBinding('@projectAnimations')
  ngOnInit(): void {}
}
