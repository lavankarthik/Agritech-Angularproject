import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:8080/ValidateLogin";
  ValidateLogin(data:any): Observable<any> {
    return this.http.post<any>(this.url,data)
  }
}

