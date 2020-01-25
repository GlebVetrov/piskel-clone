import {ToolsComponent} from './tools.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material.module';
import {CanvasComponent} from '../canvas/canvas.component';
import {FramesComponent} from '../frames/frames.component';
import {FrameComponent} from '../frames/frame/frame.component';
import {AppComponent} from '../app.component';
import {LandingPageComponent} from '../landing-page/landing-page.component';
import {AnimationComponent} from '../animation/animation.component';

describe('ToolsComponent', () => {

  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;

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
    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Change color', () => {
    component.changeColor('#ffffff');
    expect(component.primaryColor).toBe('#ffffff');
  });

  it('Set tool options', () => {
    const spy = spyOn(component, 'setToolOptions').and.returnValue(null);
    component.setToolOptions(null);
    expect(spy).toHaveBeenCalled();
  });

  it('Set color', () => {
    const spy = spyOn(component, 'setColor').and.callFake(() => null);
    component.setColor('primary');
    expect(spy).toHaveBeenCalled();
  });

  it('Set tool', () => {
    const e = {
      key: 'b'
    };
    component.setTool(e);
    expect(component.currentTool).toBe('bucket');
  });


  it('OnInit call', () => {
    const spy = spyOn(component, 'ngOnInit').and.callFake(() => null);
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

});
