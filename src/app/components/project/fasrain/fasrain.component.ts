import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projectAnimation } from '../../../project-animation';
@Component({
  selector: 'app-fasrain',
  templateUrl: './fasrain.component.html',
  styleUrls: ['./fasrain.component.scss'],
  animations: [projectAnimation],
})
export class FasrainComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Project - Fascinating Rain');
  }
  @HostBinding('@projectAnimations')
  ngOnInit(): void {}
}
