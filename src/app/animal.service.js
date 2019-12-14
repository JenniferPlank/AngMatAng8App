import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterState, Filter, Option, Animal } from './types';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';

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
    )6
    this.filters = this.animals.pipe(
      map(animals => this.createFilters(animals))
    );
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
