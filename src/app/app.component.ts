import { Component } from '@angular/core';
import { AnimalService } from './animal.service';
import { Observable } from 'rxjs';
import { Animal, FilterState, Filter, Option } from './types';
import { MatDialog } from '@angular/material/dialog';
import { AddAnimalComponent } from './add-animal/add-animal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals: Observable<Animal[]>;
  filterState: FilterState;
  filters: Observable<Filter[]>;

  constructor(animalService: AnimalService, private dialog: MatDialog) {
    this.animals = animalService.animals;
    this.filterState = animalService.filterState;
    this.filters = animalService.filters;
  }

  changeFilter(category: string, option: Option) {
    this.filterState[category] = option;
  }

  addAnimal() {
    this.dialog.open(AddAnimalComponent, {
      width: '500px',
      ariaLabel: 'Add an animal'
    });
  }
}
