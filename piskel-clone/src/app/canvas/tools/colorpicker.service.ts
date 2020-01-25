import { Injectable } from '@angular/core';
import {rgbToHex} from './common';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const PEN_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class ColorpickerService {
  colorpicker(corArray: number[][], ctx: CanvasRenderingContext2D): Observable<string> {
    return  from(corArray)
      .pipe(
        map(cors => {
          const [x, y] = cors;
          const {data} = ctx.getImageData(x, y, PEN_SIZE, PEN_SIZE);
          const [r, g, b] = data;
          return rgbToHex(r, g, b);
        })
      );
  }
}
