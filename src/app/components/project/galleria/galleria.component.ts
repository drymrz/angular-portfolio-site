import { Component, OnInit, HostBinding } from '@angular/core';
import { projectAnimation } from '../../../project-animation';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss'],
  animations: [projectAnimation],
})
export class GalleriaComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Project - Nero Galleria');
  }
  @HostBinding('@projectAnimations')
  ngOnInit(): void { }
}
