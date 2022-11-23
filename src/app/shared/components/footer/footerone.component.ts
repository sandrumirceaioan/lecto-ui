import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Settings } from '../../models/settings.model';

@Component({
  selector: 'app-footerone',
  templateUrl: './footerone.component.html',
  styleUrls: ['./footerone.component.scss']
})
export class FooteroneComponent implements OnInit {
  settings: Settings

  constructor(
    public appService: AppService
  ) {
    this.settings = this.appService.settings;
  }

  ngOnInit(): void {
  }

}
