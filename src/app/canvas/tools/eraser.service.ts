import { Injectable } from '@angular/core';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EraserService {
  eraser(corArray: number[][], ctx: CanvasRenderingContext2D, size: number) {
    from(corArray)
      .subscribe(cors => {
      const [x, y] = cors;
      ctx.clearRect(x, y, size, size);
    });
  }
}
