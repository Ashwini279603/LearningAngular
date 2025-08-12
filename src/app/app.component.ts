import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports:[CourseCardComponent],
    standalone: true
})
export class AppComponent {
Courses = COURSES;

onEditCourse(){
    this.Courses[0].description='New Title!'
}
}
