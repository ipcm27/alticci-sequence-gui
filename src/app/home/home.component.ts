import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AlticciNumber } from '../model/AlticciNumber';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AlticciNumberResultObject!: AlticciNumber;
  AlticciNumber: string = '';
  API = 'http://localhost:8080/alticci/';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  getAlticciNumber(n: any) {
    parseInt(n);
    const URL = `${this.API}${n}`;
    this.http.get<AlticciNumber>(URL).subscribe(
      res => {
        this.AlticciNumberResultObject = res;
        this.AlticciNumber = this.AlticciNumberResultObject.number.toString();
        console.log(this.AlticciNumberResultObject);
        return this.AlticciNumberResultObject;
      },
      err => {
        console.log('aconteceu um erro:' + err);
        return err;
      }
    );
  }
}
