import { Component, OnInit } from '@angular/core';

import { BehaviorSubjectService } from "./behavior-subject.service";

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {
  data: number | null = null;
  constructor(private behaviorSubjectService: BehaviorSubjectService) {
  }

  ngOnInit(): void {
    this.behaviorSubjectService.data.next(2);
    this.behaviorSubjectService.data.subscribe((e) => (this.data = e)); //Get the current value
  }

  sendData(): void {
    this.behaviorSubjectService.data.next(Math.random());
  }
}
