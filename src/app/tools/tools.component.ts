import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolsComponent implements OnInit {

  public currentTool = 'pen';
  public currentSize = 1;
  public primaryColor = '#000000';
  public secondaryColor = '#ffffff';

  @ViewChild('primaryColorRef', { static: true })
  private primaryColorRef: ElementRef<HTMLInputElement>;
  @ViewChild('secondaryColorRef', { static: true })
  private secondaryColorRef: ElementRef<HTMLInputElement>;

  constructor() { }

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

  ngOnInit(): void {
    this.primaryColorRef.nativeElement.value = this.primaryColor;
    this.secondaryColorRef.nativeElement.value = this.secondaryColor;
  }
}
