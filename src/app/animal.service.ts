import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterState, Filter, Option, Animal } from './types';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animals: Observable<Animal[]>;
  filterState: FilterState = {};
  filters: Observable<Filter[]>;

  constructor(http: HttpClient) {
    this.animals = http.get<Animal[]>('assets/animals.json').pipe(
      share()
    );
    this.filters = this.animals.pipe(
      map(animals => this.createFilters(animals))
    );
  }

  private createFilters( animals: Animal[]) {
    return [{
      category: 'spaceWalks',
      displayName: 'Space walks',
      options: this.extractFilterOptions('spaceWalks', animals)
    }, {
      category: 'undergraduateMajor',
      displayName: 'Undergraduate major',
      options: this.extractFilterOptions('undergraduateMajor', animals)
    }];
  }

  private extractFilterOptions(category: string, animals: Animal[]): Option[] {
    this.filterState[category] = '';
    return _.chain(animals)
      .groupBy(category)
      .keys()
      .sort()
      .value();
  }
}
