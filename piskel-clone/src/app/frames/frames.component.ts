import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FramesComponent {

  private actions = {
    delete: (obj) => this.deleteFrame.emit(obj),
    copy: (obj) => this.copyFrame.emit(obj),
    select: (obj) => this.selectFrame.emit(obj),
    add: () => this.addFrame.emit()
  };

  @Input() frames: string[];
  @Input() canvasSize: number;
  @Input() activeFrame: number;

  @Output() addFrame = new EventEmitter();
  @Output() deleteFrame = new EventEmitter<{num: number, boo: boolean}>();
  @Output() selectFrame = new EventEmitter<{num: number, boo: boolean}>();
  @Output() copyFrame = new EventEmitter<{num: number, boo: boolean}>();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.frames, event.previousIndex, event.currentIndex);
    this.actions.select({num: event.currentIndex, boo: false});
  }

  chooseEvent(e: MouseEvent) {
    if ((e.target as HTMLElement).innerText === 'Add new frame') {
      this.actions.add();
      return;
    }
    const id = parseInt((e.target as HTMLElement).dataset.id, 10);
    const action = (e.target as HTMLElement).dataset.action;
    if (id !== undefined && action) {
      this.actions[action]({num: id, boo: true});
    }
  }
}
