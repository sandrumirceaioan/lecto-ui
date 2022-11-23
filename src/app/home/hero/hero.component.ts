import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../app.service';
import { Settings } from '../../shared/models/settings.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements OnInit {
  settings: Settings;

  constructor(
    public appService: AppService
  ) {
    this.settings = this.appService.settings;
  }

  ngOnInit(): void {
  }

}
