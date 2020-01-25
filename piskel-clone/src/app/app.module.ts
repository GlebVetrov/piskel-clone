import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasComponent } from './canvas/canvas.component';
import { MaterialModule } from './material.module';
import { ToolsComponent } from './tools/tools.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FramesComponent } from './frames/frames.component';
import { FrameComponent } from './frames/frame/frame.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
