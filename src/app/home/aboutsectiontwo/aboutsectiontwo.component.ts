import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutsectiontwo',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './aboutsectiontwo.component.html',
  styleUrls: ['./aboutsectiontwo.component.scss']
})
export class AboutsectiontwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
