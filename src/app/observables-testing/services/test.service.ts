import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs";

import { User } from "../../user/interfaces/user.interface";

@Injectable({providedIn: "root"})
export class TestService {
  error: Subject<string> = new Subject<string>();
  private readonly jsonURL = "http://localhost:4200/users";
  constructor(private http: HttpClient) {
  }

  createAndStorePost(postData: User): void {
    this.http.post<User>(this.jsonURL, postData)
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts(): Observable<any> {
    return this.http.get<User[]>(this.jsonURL)
      .pipe(map(responseData => {
        const postsArr = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArr.push({...responseData[key], id: key})
          }
        }
        return postsArr;
      }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts(): Observable<any> {
    return this.http.delete(this.jsonURL);
  }
}
