import { Component, OnInit } from '@angular/core';

import { AsyncSubjectService } from "./async-subject.service";

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  data: number | null = null;
  constructor(private asyncSubjectService: AsyncSubjectService) {
  }

  ngOnInit(): void {
    this.asyncSubjectService.data.next(12);
    this.asyncSubjectService.data.subscribe((e) => (this.data = e));
    this.asyncSubjectService.data.next(0);
    this.asyncSubjectService.data.next(1);
    this.asyncSubjectService.data.next(3); //Last value will be sent to its subs
    this.asyncSubjectService.data.complete();
  }
}
