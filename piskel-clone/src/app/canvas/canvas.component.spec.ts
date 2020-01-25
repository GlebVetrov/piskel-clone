import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppRoutingModule} from '../app-routing.module';
import {MaterialModule} from '../material.module';
import {CanvasComponent} from './canvas.component';
import {FramesComponent} from '../frames/frames.component';
import {FrameComponent} from '../frames/frame/frame.component';
import {AppComponent} from '../app.component';
import {LandingPageComponent} from '../landing-page/landing-page.component';
import {AnimationComponent} from '../animation/animation.component';
import {ToolsComponent} from '../tools/tools.component';
import {EMPTY, fromEvent, Observable} from 'rxjs';

describe('ToolsComponent', () => {

  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CanvasComponent,
        ToolsComponent,
        FramesComponent,
        FrameComponent,
        LandingPageComponent,
        AnimationComponent
      ],
      imports: [
        AppRoutingModule,
        MaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Set color', () => {
      const spy = spyOn(component, 'setColor').and.returnValue(null);
      component.setColor(null);
      expect(spy).toHaveBeenCalled();
  });

  it('Set size', () => {
      component.size(64);
      expect(component.canvasSize).toBe(64);
  });

  it('Init event', () => {
      const spy = spyOn(component, 'initEvent').and.returnValue(null);
      component.initEvent();
      expect(spy).toHaveBeenCalled();
  });

  it('Mouse center', () => {
      const cor = component.mouseCenter(50);
      expect(cor).toBe(1);
  });

  it('Init draw', () => {
      const spy = spyOn(component, 'initDraw').and.returnValue(EMPTY);
      component.initDraw();
      expect(spy).toHaveBeenCalled();
  });

  it('Draw', () => {
      const spy = spyOn(component, 'draw').and.returnValue(null);
      component.draw(null);
      expect(spy).toHaveBeenCalled();
  });

  it('Save img', () => {
      component.saveImg();
      expect(component.frames.length).toBe(1);
  });

  it('Clear canvas', () => {
    const spy = spyOn(component, 'clearCanvas').and.returnValue(null);
    component.clearCanvas();
    expect(spy).toHaveBeenCalled();
  });

  it('Add frame', () => {
    component.addFrame();
    expect(component.frames.length).toBe(2);
  });

  it('Delete frame', () => {
    const obj = {num: 0, boo: false};
    component.deleteFrame(obj);
    expect(component.frames.length).toBe(1);
  });

  it('Copy frame', () => {
    const obj = {num: 0, boo: false};
    component.copyFrame(obj);
    expect(component.frames.length).toBe(2);
  });

  it('Select frame', () => {
    const obj = {num: 0, boo: false};
    component.selectFrame(obj);
    expect(component.activeFrame).toBe(0);
  });

  it('OnInit call', () => {
    const spy = spyOn(component, 'ngOnInit').and.callFake(() => null);
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

});
