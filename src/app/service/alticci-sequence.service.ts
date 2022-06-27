import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AlticciNumber } from '../model/AlticciNumber';

@Injectable({
  providedIn: 'root'
})
export class AlticciSequenceService {
  AlticciNumberResult!: AlticciNumber;
  API = 'http://localhost:8080/alticci/';

  constructor(private http: HttpClient) {}

  getAlticciNumber(n: any) {
    const URL = `${this.API}${n}`;
    this.http.get<AlticciNumber>(URL).subscribe(
      res => {
        this.AlticciNumberResult = res;
        console.log(this.AlticciNumberResult);
        return this.AlticciNumberResult;
      },
      err => {
        console.log('aconteceu um erro:' + err);
        return err;
      }
    );
  }
}
