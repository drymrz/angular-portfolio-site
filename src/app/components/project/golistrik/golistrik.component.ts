import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projectAnimation } from '../../../project-animation';

@Component({
  selector: 'app-golistrik',
  templateUrl: './golistrik.component.html',
  styleUrls: ['./golistrik.component.scss'],
  animations: [projectAnimation],
})
export class GolistrikComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Project - Go-Listrik');
  }

  @HostBinding('@projectAnimations')
  ngOnInit(): void {}
}
