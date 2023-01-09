import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@Component({
  selector: 'app-cardsection',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './cardsection.component.html',
  styleUrls: ['./cardsection.component.scss']
})
export class CardsectionComponent implements OnInit {
  searchGroup: FormGroup;

  courses: Observable<any[]>;
  locations: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.searchGroup = this.fb.group({
      course: new FormControl(null),
      courseFilter: new FormControl(null),
      location: new FormControl(null),
      locationFilter: new FormControl(null),
      range: new FormControl(null),
      rangeFilter: new FormControl(null),
    });

  }


}
