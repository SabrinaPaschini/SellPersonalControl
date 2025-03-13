import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-sell-control',
  templateUrl: './sell-control.component.html',
  styleUrls: ['./sell-control.component.css'],
})
export class SellControlComponent implements OnInit {
  meta: number = 0;
  dias: number = 0;

  itemTemp: number = 0;
  item: number = 0;

  constructor(private configService: ConfigService) {}

  guardaItem() {
    this.item = this.itemTemp;
  }

  ngOnInit(): void {}
}
