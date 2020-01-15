import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ToolsComponent} from './tools/tools.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'app', component: ToolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
