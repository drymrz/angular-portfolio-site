import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projectAnimation } from '../../../project-animation';

@Component({
  selector: 'app-perpustakaan',
  templateUrl: './perpustakaan.component.html',
  styleUrls: ['./perpustakaan.component.scss'],
  animations: [projectAnimation],
})
export class PerpustakaanComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Project - SI Perpustakaan');
  }
  @HostBinding('@projectAnimations')
  ngOnInit(): void {}
}
