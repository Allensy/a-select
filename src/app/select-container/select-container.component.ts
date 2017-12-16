import { Component, OnInit } from '@angular/core';
import * as hotels1 from '../../data/select1.json';
import * as hotels2 from '../../data/select2.json';

@Component({
  selector: 'app-select-container',
  templateUrl: './select-container.component.html',
  styleUrls: ['./select-container.component.scss']
})
export class SelectContainerComponent implements OnInit {
  private hotelsList1 = hotels1;
  private hotelsList2 = hotels2;
  constructor() { }

  ngOnInit() { }
  onItemChanged(event) {
    // This is the event that was emitted from the first child component named 'my-select'
    console.log(event);
  }
}
