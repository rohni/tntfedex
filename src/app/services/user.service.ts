import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Signup } from '../models/signup.model';
import { map, tap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://demo-api.now.sh/users';

  constructor(private http: HttpClient) {}

  postUser(userObj: Signup): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.url, userObj, { headers, observe: 'response' });
  }
}
