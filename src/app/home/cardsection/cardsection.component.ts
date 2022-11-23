import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cardsection',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './cardsection.component.html',
  styleUrls: ['./cardsection.component.scss']
})
export class CardsectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
