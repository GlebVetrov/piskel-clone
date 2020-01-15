import { Injectable } from '@angular/core';
import {from} from 'rxjs';
import {hexToRgba, getPixelPos, matchColor, matchStartColor, colorPixel} from './common';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  floodFill(corArray: number[][], ctx: CanvasRenderingContext2D, size: number, color: string, canvasSize: number) {
    const rgbColor = hexToRgba(color);
    from(corArray)
      .subscribe( cors => {
      const [startX, startY] = cors;

      const dstImg = ctx.getImageData(0, 0, canvasSize, canvasSize);
      const dstData = dstImg.data;

      const startPos = getPixelPos(startX, startY, canvasSize);
      const startColor = {
        r: dstData[startPos],
        g: dstData[startPos + 1],
        b: dstData[startPos + 2],
        a: dstData[startPos + 3]
      };

      if (matchColor(rgbColor, startColor)) {
        return;
      }
      const todo = [[startX, startY]];

      while (todo.length) {
        const pos = todo.pop();
        const x = pos[0];
        let y = pos[1];
        let currentPos = getPixelPos(x, y, canvasSize);
        while ((y-- >= 0) && matchStartColor(dstData, currentPos, startColor)) {
          currentPos -= canvasSize * 4;
        }

        currentPos += canvasSize * 4;
        ++y;
        let reachLeft = false;
        let reachRight = false;

        while ((y++ < canvasSize - 1) && matchStartColor(dstData, currentPos, startColor)) {

          colorPixel(dstData, currentPos, rgbColor);

          if (x > 0) {
            if (matchStartColor(dstData, currentPos - 4, startColor)) {
              if (!reachLeft) {
                todo.push([x - 1, y]);
                reachLeft = true;
              }
            } else if (reachLeft) {
              reachLeft = false;
            }
          }

          if (x < canvasSize - 1) {
            if (matchStartColor(dstData, currentPos + 4, startColor)) {
              if (!reachRight) {
                todo.push([x + 1, y]);
                reachRight = true;
              }
            } else if (reachRight) {
              reachRight = false;
            }
          }

          currentPos += canvasSize * 4;
        }
      }

      ctx.putImageData(dstImg, 0, 0);
    });
  }
}
