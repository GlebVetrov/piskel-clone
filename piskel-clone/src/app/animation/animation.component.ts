import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import {interval, Subscription} from 'rxjs';

const MIN_ARR_LENGTH = 1;
const ONE_SECOND = 1000;
const FIRST_ELEM_OF_ARRAY = 0;

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimationComponent implements OnDestroy {

  public rangeValue = 1;
  public img: string;
  private framesArr: string[];
  private animation$: Subscription;
  private index = 0;

  @Input() set frames(arr) {
    const [first] = arr;
    this.img = first;
    this.framesArr = [...arr];
    this.initAnimation();
  }

  @ViewChild('frame', {static: false})
  private frame: ElementRef<HTMLElement>;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  initAnimation() {
    if (this.animation$ && this.framesArr.length <= MIN_ARR_LENGTH) {
      this.stopAnimation();
      return;
    }
    if (this.animation$ && this.framesArr.length > MIN_ARR_LENGTH) {
      this.stopAnimation();
      this.startAnimation();
      return;
    }
    if (this.framesArr.length > MIN_ARR_LENGTH) {
      this.startAnimation();
    }
  }

  range($event: Event) {
    this.rangeValue = parseInt(($event.target as HTMLInputElement).value, 10);
    this.initAnimation();
  }

  startAnimation() {
    this.animation$ = interval(ONE_SECOND / this.rangeValue).subscribe(() => {
      this.img = this.framesArr[this.index];
      if (this.index === this.framesArr.length - 1) {
        this.index = FIRST_ELEM_OF_ARRAY;
      } else {
        this.index += 1;
      }
      this.cdr.detectChanges();
    });
  }

  stopAnimation() {
    this.animation$.unsubscribe();
  }

  fullScreen() {
    if ('fullscreenEnabled') {
      if (document.fullscreenEnabled) {
        console.log('User allows fullscreen');
        if ('requestFullscreen' in this.frame.nativeElement) {
          this.frame.nativeElement.requestFullscreen();
        }
      }
    } else {
      console.log('User doesnt allow full screen');
    }
  }

  saveFrames() {
    localStorage.setItem('animation', JSON.stringify(this.framesArr));
  }

  ngOnDestroy() {
    this.stopAnimation();
  }
}
