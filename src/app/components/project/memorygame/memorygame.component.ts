import { Component, OnInit, HostBinding } from '@angular/core';
import { projectAnimation } from '../../../project-animation';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-memorygame',
  templateUrl: './memorygame.component.html',
  styleUrls: ['./memorygame.component.scss'],
  animations: [projectAnimation],
})
export class MemorygameComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Project - Memory Game');
  }
  @HostBinding('@projectAnimations')
  ngOnInit(): void { }

}
