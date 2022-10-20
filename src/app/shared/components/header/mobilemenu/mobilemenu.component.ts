import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobilemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
