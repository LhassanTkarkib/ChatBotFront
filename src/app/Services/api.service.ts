import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;


  constructor(
    private http: HttpClient,
  ) { }

  sendMessage(message: string): Observable<any> {
    const body = {
      question: message,
    };
    return this.http.post<any>(`${this.baseUrl}/query`, body);
  }

}
