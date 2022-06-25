import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface ApiResponse {
  AlticciNumber: number;
}
@Injectable({
  providedIn: 'root'
})
export class AlticciSequenceService {
  constructor(private http: HttpClient) {}
  URL = 'http://localhost:8080/alticci/';

  getAlticciNumber(n: number) {
    let response = this.http.get<ApiResponse>(`${this.URL}${n}`);

    console.log(response);
    return response;
  }
}
