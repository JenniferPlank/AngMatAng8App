import { Component, Input } from '@angular/core';
import { ResizeService } from './size-detector/resize.service';
import { SCREEN_SIZE } from './size-detector/screen-size.enum';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{size}}!</h1>
              <p>(0 = xs, 1 = sm, 2 = md, 3 = lg, 4 = xl)</p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {

  size: SCREEN_SIZE;

  constructor(private resizeSvc: ResizeService) {
    this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        this.size = x;
      });
  }

}
