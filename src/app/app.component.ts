import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';
import { Settings } from './shared/models/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  settings: Settings

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    console.log('APP: ', this.appService.settings);
  }

}
