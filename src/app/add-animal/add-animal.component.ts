import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AnimalService } from '../animal.service';
import { Observable } from 'rxjs';
import { Option } from '../types';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent {
  animal: FormGroup;
  undergraduateMajors: Observable<Option[]>;

  constructor(
    private dialogRef: MatDialogRef<AddAnimalComponent>,
    fb: FormBuilder,
    animalService: AnimalService
  ) {
    this.animal = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleInitial: ['', Validators.maxLength(1)],
      active: [true],
      birthdate: ['', Validators.required],
      undergraduateMajor: ['', Validators.required]
    });
    this.undergraduateMajors = animalService.filters.pipe(
      map(filters => filters.find(f => f.category === 'undergraduateMajor')),
      map(filter => filter.options),
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAnimal() {
    // Save to backend
    // Display new astronaut
    console.log(this.animal.value);
    this.close();
  }

}
