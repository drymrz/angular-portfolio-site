import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projectAnimation } from '../../../project-animation';

@Component({
  selector: 'app-oldportfolio',
  templateUrl: './oldportfolio.component.html',
  styleUrls: ['./oldportfolio.component.scss'],
  animations: [projectAnimation],
})
export class OldportfolioComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Project - Old Portfolio');
  }
  @HostBinding('@projectAnimations')
  ngOnInit(): void {}
}
