import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { CardsectionComponent } from './cardsection/cardsection.component';
import { MessagesectionComponent } from './messagesection/messagesection.component';
import { AboutsectiontwoComponent } from './aboutsectiontwo/aboutsectiontwo.component';
import { CampussectionComponent } from './campussection/campussection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    CardsectionComponent,
    MessagesectionComponent,
    AboutsectiontwoComponent,
    CampussectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
