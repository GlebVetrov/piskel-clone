import { Injectable } from '@angular/core';
import {from} from 'rxjs';
import {PenService} from './pen.service';
import {pen} from './common';

@Injectable({
  providedIn: 'root'
})
export class MirrorService {

  constructor(private penService: PenService) { }

  mirror(corArray: number[][], ctx: CanvasRenderingContext2D, size: number, color: string, canvasSize: number) {
    from(corArray)
      .subscribe(cors => {
      const [x, y] = cors;
      pen(x, y, ctx, size, color);
      pen(canvasSize - x, y, ctx, size, color);
    });
  }
}
