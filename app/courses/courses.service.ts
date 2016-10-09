import {Injectable} from '@angular/core'

import {Course} from '../models/course'
import {COURSES} from '../data/courses-mock'

@Injectable()
export class CoursesService {
	getCourses(): Course[] {
		return COURSES;
	}
}