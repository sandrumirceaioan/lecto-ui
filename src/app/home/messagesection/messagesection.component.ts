import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-messagesection',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './messagesection.component.html',
  styleUrls: ['./messagesection.component.scss'],
})
export class MessagesectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
