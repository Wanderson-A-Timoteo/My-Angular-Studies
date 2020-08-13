import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courses = this.courseService.retrievelAll();




//    this.courses = [
//      {
//        id: 1,
//        name: 'Angular: Forms',
//        imageUrl: '/assets/images/forms.png',
//        price: 99.99,
//       code: 'XPS-8796',
//        duration: 120,
//        rating: 4.5,
//        releaseDate: 'Agosto, 12, 2020',
//        description: ''
//
//      },
//      {
//        id: 2,
//       name: 'Angular: HTTP',
//        imageUrl: '/assets/images/http.png',
//        price: 49.00,
//        code: 'LXL-1094',
//        duration: 80,
//        rating: 4,
//        releaseDate: 'Agosto, 12, 2020',
//        description: ''
//      }
//    ]
  }

}