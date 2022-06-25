import { Component, OnInit } from '@angular/core';
import { AlticciSequenceService } from '../service/alticci-sequence.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AlticciNumber!: any;

  constructor(private AlticciService: AlticciSequenceService) {}

  ngOnInit(): void {}

  getNumber(input: string) {
    this.AlticciNumber = this.AlticciService.getAlticciNumber(parseInt(input));
    return this.AlticciNumber;
  }
}
