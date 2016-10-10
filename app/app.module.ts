import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CoursesComponent} from './courses/courses.component';
//import {CourseComponent} from './courses/course.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [BrowserModule, routing],
  declarations: [AppComponent, HomeComponent, CoursesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }