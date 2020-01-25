import { Injectable } from '@angular/core';
import {from} from 'rxjs';
import {pen, draw} from './common';

@Injectable({
  providedIn: 'root'
})
export class StrokeService {
  private starX: number;
  private starY: number;
  private img;
  constructor() {
    this.beginStroke = this.beginStroke.bind(this);
    this.drawStroke = this.drawStroke.bind(this);
  }
 beginStroke(corArray: number[][], ctx: CanvasRenderingContext2D, size: number, color: string, frame: string) {
    this.img = new Image();
    this.img.src = frame;
    from(corArray)
     .subscribe(cors => {
       const [x, y] = cors;
       this.starX = x;
       this.starY = y;
       pen(x, y, ctx, size, color);
     });
 }

 drawStroke(corArray: number[][], ctx: CanvasRenderingContext2D, size: number, color: string, canvasSize: number) {
    from(corArray)
     .subscribe(cors => {
       ctx.clearRect(0, 0, canvasSize, canvasSize);
       ctx.drawImage(this.img, 0, 0);
       const [x, y] = cors;
       const corsArr = draw(this.starX, this.starY, x, y);
       from(corsArr)
         .subscribe(coordinates => {
          const [endX, endY] = coordinates;
          pen(endX, endY, ctx, size, color);
         });
     });
 }
}
