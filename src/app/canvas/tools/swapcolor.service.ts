import { Injectable } from '@angular/core';
import {from} from 'rxjs';
import {getPixelPos, hexToRgba} from './common';

@Injectable({
  providedIn: 'root'
})
export class SwapcolorService {

  constructor() {}

  swapcolor(corArray: number[][], ctx: CanvasRenderingContext2D, size: number, color: string, canvasSize: number) {
    from(corArray)
      .subscribe(cors => {
        const [startX, startY] = cors;
        const img = ctx.getImageData(0, 0, canvasSize, canvasSize);
        const {data} = img;
        const startPos = getPixelPos(startX, startY, canvasSize);
        const startColor = {
          r: data[startPos],
          g: data[startPos + 1],
          b: data[startPos + 2],
          a: data[startPos + 3]
        };
        const {r, g, b, a} = startColor;
        const selectColor = hexToRgba(color);
        if (r === selectColor.r && g === selectColor.g && b ===  selectColor.b && a === selectColor.a) {
          return;
        }
        for (let i = 0; i < data.length; i += 4) {
          if (r === data[i] && g === data[i + 1] && b ===  data[i + 2] && a === data[i + 3]) {
            data[i] = selectColor.r;
            data[i + 1] = selectColor.g;
            data[i + 2] = selectColor.b;
            data[i + 3] = selectColor.a;
          }
        }
        ctx.putImageData(img, 0, 0);
      });
  }
}
