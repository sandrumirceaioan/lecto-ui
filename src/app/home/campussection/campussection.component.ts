import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppService } from '../../app.service';
import { Settings } from '../../shared/models/settings.model';

@Component({
  selector: 'app-campussection',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MaterialModule
  ],
  templateUrl: './campussection.component.html',
  styleUrls: ['./campussection.component.scss'],
})
export class CampussectionComponent implements OnInit {
  settings: Settings;

  constructor(
    private appService: AppService
  ) {
    this.settings = this.appService.settings;
  }

  ngOnInit(): void {}

}
