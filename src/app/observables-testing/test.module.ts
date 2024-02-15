import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { TestObservablesComponent } from "./components/test-observables/test-observables.component";
import { SubjectComponent } from "./components/subject/subject.component";
import { BehaviorSubjectComponent } from "./components/behavior-subject/behavior-subject.component";
import { ReplaySubjectComponent } from "./components/replay-subject/replay-subject.component";
import { AsyncSubjectComponent } from "./components/async-subject/async-subject.component";
import { TestService } from "./services/test.service";
import { SubjectService } from "./components/subject/subject.service";
import { BehaviorSubjectService } from "./components/behavior-subject/behavior-subject.service";
import { ReplaySubjectService } from "./components/replay-subject/replay-subject.service";
import { AsyncSubjectService } from "./components/async-subject/async-subject.service";

@NgModule({
  declarations: [
    TestObservablesComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    TestService,
    SubjectService,
    BehaviorSubjectService,
    ReplaySubjectService,
    AsyncSubjectService
  ]
})
export class TestModule { }
