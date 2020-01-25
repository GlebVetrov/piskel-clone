import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolsComponent implements OnInit, OnDestroy {

  public currentTool = 'pen';
  public currentSize = 1;
  public primaryColor = '#000000';
  public secondaryColor = '#ffffff';

  private keyDown$: Observable<any>;
  private keyDownSub$: Subscription;

  @ViewChild('primaryColorRef', { static: true })
  private primaryColorRef: ElementRef<HTMLInputElement>;
  @ViewChild('secondaryColorRef', { static: true })
  private secondaryColorRef: ElementRef<HTMLInputElement>;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  setToolOptions($event: MouseEvent): void {
    const tool = ($event.target as HTMLElement).dataset.tool;
    if (tool) {
      if (tool === this.currentTool) { return; }
      this.currentTool = ($event.target as HTMLElement).dataset.tool;
    }
    const size = parseInt(($event.target as HTMLElement).dataset.size, 10);
    if (size) {
      if (size === this.currentSize) { return; }
      this.currentSize = size;
    }
  }

  changeColor(color: string): void {
    if (typeof color === 'string') {
      this.primaryColor = this.primaryColorRef.nativeElement.value = color;
    }
  }

  setColor(type: string): void {
    if (type === 'primary') {
      this.primaryColor = this.primaryColorRef.nativeElement.value;
      return;
    }
    this.secondaryColor = this.secondaryColorRef.nativeElement.value;
  }

  setTool(e) {
    const shortcuts = {
      p: 'pen',
      v: 'mirror',
      b: 'bucket',
      a: 'swapcolor',
      e: 'eraser',
      l: 'stroke',
      o: 'colorpicker'
    };
    if (shortcuts[e.key]) {
      this.currentTool = shortcuts[e.key];
      this.cdr.detectChanges();
    }
  }

  ngOnInit(): void {
    this.primaryColorRef.nativeElement.value = this.primaryColor;
    this.secondaryColorRef.nativeElement.value = this.secondaryColor;

    this.keyDown$ = fromEvent(document, 'keydown');
    this.keyDownSub$ = this.keyDown$.subscribe((e: KeyboardEvent) => {
      this.setTool(e);
    });
  }

  ngOnDestroy() {
    this.keyDownSub$.unsubscribe();
  }
}
