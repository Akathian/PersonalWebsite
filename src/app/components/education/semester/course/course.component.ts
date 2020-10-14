import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course;
  href;
  constructor() { }

  ngOnInit() {
    this.href = "#" + this.course.code
  }

}
