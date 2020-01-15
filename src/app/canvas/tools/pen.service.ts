import { Injectable } from '@angular/core';
import {from} from 'rxjs';
import {pen} from './common';

@Injectable({
  providedIn: 'root'
})
export class PenService {
  pen(corArray: number[][], ctx: CanvasRenderingContext2D, size: number, color: string): void {
    from(corArray)
      .subscribe(cors => {
      const [x, y] = cors;
      pen(x, y, ctx, size, color);
    });
  }
}
