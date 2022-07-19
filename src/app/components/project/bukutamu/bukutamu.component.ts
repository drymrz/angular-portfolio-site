import { Component, OnInit, HostBinding } from '@angular/core';
import { projectAnimation } from '../../../project-animation';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bukutamu',
  templateUrl: './bukutamu.component.html',
  styleUrls: ['./bukutamu.component.scss'],
  animations: [projectAnimation],
})
export class BukutamuComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Project - Buku Tamu');
  }
  @HostBinding('@projectAnimations')
  ngOnInit(): void {}
}
