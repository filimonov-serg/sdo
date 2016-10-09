import {Component, OnInit} from '@angular/core';

import {CoursesService} from './courses.service';
import {Course} from '../models/course';

@Component({
	selector: 'courses',
	templateUrl: './app/courses/courses.component.html',
	providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
	myCourses: Course[];
	constructor(private coursesService: CoursesService) {

	}

	ngOnInit(): void {
		this.getCourses();		
	}

	getCourses(): void {
		this.myCourses = this.coursesService.getCourses();
	}
}