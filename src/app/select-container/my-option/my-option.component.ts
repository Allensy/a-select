import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-option',
  templateUrl: './my-option.component.html',
  styleUrls: ['./my-option.component.scss']
})
export class MyOptionComponent implements OnInit {
@Input() item;
@Output() itemPicked: EventEmitter<any> =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  chosenItem(item) {
    // this is the 'hotel-item' component in the list. every hotel has an instance and here this is the function
    // that emitting the chosen item to the parent component: 'my-select' component
    this.itemPicked.emit(item);
  }
}
