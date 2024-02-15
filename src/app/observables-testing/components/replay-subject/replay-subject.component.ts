import { Component } from '@angular/core';

import { ReplaySubjectService } from "./replay-subject.service";

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent {
  data: number[] = [];
  constructor(private replaySubjectService: ReplaySubjectService ) {
    this.replaySubjectService.data.next(500);
    this.replaySubjectService.data.next(50);
    this.replaySubjectService.data.next(5);
    this.replaySubjectService.data.subscribe((e) => this.data.push(e));
  }
}
