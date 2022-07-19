import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projectAnimation } from '../../../project-animation';

@Component({
  selector: 'app-skyisland',
  templateUrl: './skyisland.component.html',
  styleUrls: ['./skyisland.component.scss'],
  animations: [projectAnimation],
})
export class SkyislandComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Project - Sky Island');
  }
  @HostBinding('@projectAnimations')
  ngOnInit(): void {}
}
