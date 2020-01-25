import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
  Input,
  Output, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import {fromEvent, merge, Observable, Subscription, timer} from 'rxjs';
import {map, mergeMap, pairwise, takeUntil} from 'rxjs/operators';
import {PenService} from './tools/pen.service';
import {MirrorService} from './tools/mirror.service';
import {BucketService} from './tools/bucket.service';
import {EraserService} from './tools/eraser.service';
import {SwapcolorService} from './tools/swapcolor.service';
import {ColorpickerService} from './tools/colorpicker.service';
import {StrokeService} from './tools/stroke.service';
import {draw} from './tools/common';

const FIRST_CANVAS_SIZE = 32;
const CANVAS_STYLE_SIZE = 856;

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasComponent implements OnInit, OnDestroy {
  private mouseMove$: Observable<any>;
  private mouseDown$: Observable<any>;
  private mouseUp$: Observable<any>;
  private mouseLeave$: Observable<any>;
  private mouseMoveSub$: Subscription;
  private mouseUpSub$: Subscription;

  private ctx: CanvasRenderingContext2D;
  private img = new Image();
  private canvasSizes = [32, 64, 128];
  public canvasSize = FIRST_CANVAS_SIZE;

  public activeFrame = 0;
  public frames = [];

  private tools = {
    pen: this.penService.pen,
    mirror: this.mirrorService.mirror,
    bucket: this.bucketService.floodFill,
    eraser: this.eraserService.eraser,
    swapcolor: this.swapcolorService.swapcolor,
    stroke: this.strokeService,
    colorpicker: this.colorpickerService.colorpicker
  };

  @ViewChild('canvas', { static: true })
  private canvas: ElementRef<HTMLCanvasElement>;

  @Input() primaryColor: string;
  @Input() secondaryColor: string;
  @Input() currentTool: string;
  @Input() currentSize: number;
  @Input() colorPrimaryInput: ElementRef<HTMLInputElement>;


  @Output() colorChange = new EventEmitter<string>();
  setColor(color) {
    this.colorChange.emit(color);
  }

  constructor(
    private penService: PenService,
    private mirrorService: MirrorService,
    private eraserService: EraserService,
    private swapcolorService: SwapcolorService,
    private colorpickerService: ColorpickerService,
    private strokeService: StrokeService,
    private bucketService: BucketService,
    private cdr: ChangeDetectorRef
  ) {
  }


  size(num) {
    const canvas = this.canvas.nativeElement;
    if (num === this.canvasSize) {return; }
    this.canvasSize = canvas.width = canvas.height = num;
    const url = canvas.toDataURL();
    this.frames = this.frames.map( elem => url);
  }


  initEvent() {
    this.mouseMove$ = fromEvent(this.canvas.nativeElement, 'mousemove');
    this.mouseUp$ = fromEvent(this.canvas.nativeElement, 'mouseup');
    this.mouseDown$ = fromEvent(this.canvas.nativeElement, 'mousedown');
    this.mouseLeave$ = fromEvent(this.canvas.nativeElement, 'mouseleave');
  }

  mouseCenter(cor): number {
    return  Math.floor(cor / (CANVAS_STYLE_SIZE / this.canvasSize));
  }

  initDraw(): Observable<any> {
    return this.mouseDown$.pipe(
      mergeMap(down => {
        this.draw(down);
        return  this.mouseMove$.pipe(
          map((e: MouseEvent) => {
            return {
              x: this.mouseCenter(e.offsetX),
              y: this.mouseCenter(e.offsetY)
            };
          }),
          pairwise(),
          takeUntil(this.mouseUp$),
          takeUntil(this.mouseLeave$)
        );
      })
    );
  }

  draw(data): void {
    let arrCors;
    if (data.length) {
      const [from, to] = data;
      arrCors = draw(from.x, from.y, to.x, to.y);
    } else {
      const x = this.mouseCenter(data.offsetX);
      const y = this.mouseCenter(data.offsetY);
      arrCors = draw(x, y, x, y);
    }
    if (this.currentTool === 'colorpicker') {
      this.tools[this.currentTool](arrCors, this.ctx)
        .subscribe(color => this.setColor(color));
    }
    if (this.currentTool === 'stroke') {
      data.length ? this.tools[this.currentTool].drawStroke(
        arrCors, this.ctx, this.currentSize, this.primaryColor, this.canvasSize
        ) :
      this.tools[this.currentTool].beginStroke(
        arrCors, this.ctx, this.currentSize, this.primaryColor, this.frames[this.activeFrame]
      );
    }
    if (
      this.tools[this.currentTool] &&
      this.currentTool !== 'colorpicker' &&
      this.currentTool !== 'stroke'
    ) {
      this.tools[this.currentTool](arrCors, this.ctx, this.currentSize, this.primaryColor, this.canvasSize);
    }
  }

  saveImg(): void {
    const img = this.canvas.nativeElement.toDataURL();
    this.frames[this.activeFrame] = img;
    this.img.src = img;
    this.frames = [...this.frames];
    this.cdr.detectChanges();
  }

  clearCanvas(): void {
    this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
  }

  addFrame(): void {
    this.activeFrame = this.frames.length;
    this.clearCanvas();
    this.saveImg();
  }

  deleteFrame(obj: {num: number, boo: boolean}): void {
    const {num} = obj;
    if (this.frames.length > 1) {
      this.frames = [...this.frames.slice(0, num), ...this.frames.slice(num + 1)];
      if (this.activeFrame === num) {
        this.selectFrame({num: num - 1, boo: false});
      }
    }
  }

  copyFrame(obj: {num: number, boo: boolean}): void {
    const {num} = obj;
    this.frames = [...this.frames.slice(0, num + 1), this.frames[num], ...this.frames.slice(num + 1)];
  }

  selectFrame(obj: {num: number, boo: boolean}): void {
    const {num, boo} = obj;
    if (num === this.activeFrame && boo) { return; }
    this.activeFrame = num;
    this.clearCanvas();
    this.img.src = this.frames[this.activeFrame];
    this.img.onload = () => {
      this.ctx.drawImage(this.img, 0, 0);
    };
  }

  ngOnInit(): void {
    this.canvas.nativeElement.width = this.canvas.nativeElement.height = this.canvasSize;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    const imgArr = JSON.parse(localStorage.getItem('animation'));
    if (imgArr) {
      this.frames = [...imgArr];
      this.selectFrame({num: 0, boo: false});
    } else {
      this.saveImg();
    }
    this.initEvent();
    this.mouseMoveSub$ = this.initDraw().subscribe((data) => {
     this.draw(data);
    });
    this.mouseUpSub$ = this.mouseUp$
      .subscribe(data => this.saveImg());
  }

  ngOnDestroy(): void {
    this.mouseUpSub$.unsubscribe();
    this.mouseMoveSub$.unsubscribe();
  }
}
