import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CoursesComponent} from './courses/courses.component';


const appRoutes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'courses', component: CoursesComponent},
	{path: '', component: HomeComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);