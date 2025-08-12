import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',  
  standalone:true,
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent {
@Input({
  required:true
})
course:Course;
@Input() index;
@Input() count


onTitleChange(newTitle:string){
this.course.description = newTitle;
}

}