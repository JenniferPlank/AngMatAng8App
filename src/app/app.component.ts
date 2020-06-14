import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { AnimalService } from './animal.service';
import { Option } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  imagePath: any;
  breakpoint: any;
  baseUrl: string;
  animals: any;
  filterState: Record<string, Option>;
  filter: any;

  /* baseUrl = '/assets/Bornean_orangutan__Pongo_pygmaeus__Tanjung_Putting_National_Park_03_Original_vmrkxh_949.jpg';*/

  constructor(public breakpointObserver: BreakpointObserver, animalService: AnimalService) {
    this.animals = animalService.animals;
    this.filterState = animalService.filterState;
    this.filter = animalService.filters;
  }
  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        let url = this.baseUrl.split('/');
        let insertIndex = url.indexOf('upload');
        const options = 'c_thumb,g_auto,f_auto,q_auto,w_400';
        url.splice(insertIndex + 1, 0, options);
        this.imagePath = url.join('/');
        this.breakpoint = Breakpoints.XSmall;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        let url = this.baseUrl.split('/');
        let insertIndex = url.indexOf('upload');
        const options = 'c_thumb,g_auto,f_auto,q_auto,w_600';
        url.splice(insertIndex + 1, 0, options);
        this.imagePath = url.join('/');
        this.breakpoint = Breakpoints.Small;
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        let url = this.baseUrl.split('/');
        let insertIndex = url.indexOf('upload');
        const options = 'c_fill,ar_2:1,g_auto,f_auto,q_auto,w_960';
        url.splice(insertIndex + 1, 0, options);
        this.imagePath = url.join('/');
        this.breakpoint = Breakpoints.Medium;
      }
      if (result.breakpoints[Breakpoints.Large]) {
        let url = this.baseUrl.split('/');
        let insertIndex = url.indexOf('upload');
        const options = 'c_fill,g_auto,f_auto,q_auto,w_1200';
        url.splice(insertIndex + 1, 0, options);
        this.imagePath = url.join('/');
        this.breakpoint = Breakpoints.Large;
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        let url = this.baseUrl.split('/');
        let insertIndex = url.indexOf('upload');
        console.log(url);
        const options = 'c_fill,g_auto,f_auto,q_auto,w_1600';
        url.splice(insertIndex + 1, 0, options);
        this.imagePath = url.join('/');
        this.breakpoint = Breakpoints.XLarge;
      }
    });
  }
}

