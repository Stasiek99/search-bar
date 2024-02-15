import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from "../../../user/interfaces/user.interface";
import { TestService } from "../../services/test.service";

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.scss']
})
export class TestObservablesComponent implements OnInit {
  loadedPosts: User[] = [];
  error: string | null = null
  constructor(private http: HttpClient, private testService: TestService) {
  }

  ngOnInit(): void {
    this.onFetchPost();
  }

  onCreatePost(postData: User): void {
    this.testService.createAndStorePost(postData);
  }

  onFetchPost(): void {
    this.testService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    });
  }

  onClearPosts(): void {
    this.testService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError(): void {
    this.error = null;
  }
}
