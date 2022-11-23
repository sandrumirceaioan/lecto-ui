import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Settings } from 'src/app/shared/models/settings.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sidebarInfoActive: boolean = false;
  isSticky: boolean = false;
  settings: Settings;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 40;
  }

  constructor(
    public appService: AppService
  ) {
    this.settings = this.appService.settings;
  }

  ngOnInit(): void { }

}
