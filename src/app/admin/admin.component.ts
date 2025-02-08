import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  dias: number = 0;
  diasTemp: number = 0;

  diasData() {
    return (this.dias = this.diasTemp);
  }

  ngOnInit(): void {}
}
