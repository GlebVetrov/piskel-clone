import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameComponent implements OnInit {

  private ctx: CanvasRenderingContext2D;
  private img = new Image();
  private curSize;

  @Input() index: number;
  @Input() frame: string;
  @Input() set canvasSize(size) {
    if (size === this.curSize) { return; }
    this.curSize = this.canvas.nativeElement.width = this.canvas.nativeElement.height = size;
  }

  @ViewChild('canvas', { static: true })
  private canvas: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    const draw = () => {
      this.ctx.drawImage(this.img, 0, 0);
    };
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.img.onload = draw;
    this.img.src = this.frame;
  }
}
