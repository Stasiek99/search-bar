import { Component, OnInit } from '@angular/core';

import { SubjectService } from "./subject.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  data: number | null = null;
  constructor(private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.subjectService.data.next(2);
    this.subjectService.data.subscribe((e) => (this.data = e)); //Doesn't get the current Value
  }

  sendData(): void {
    this.subjectService.data.next(Math.random());
  }
}
