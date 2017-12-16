import { Component, OnInit, Input, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.scss']
})
export class MySelectComponent implements OnInit {
  private showMenu = false;
  private chosenItem;
  // The component get a list of items (from the select-container component) to show in the list. The input is the list.
  @Input() itemsList;
  @Output() changedItem: EventEmitter<any> = new EventEmitter();
  @Output() public outsideClick = new EventEmitter();
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    // this is a listener that allow me to close the list when clicking outside of the component
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.showMenu = false;
    }
  }

  constructor(
    private _elementRef: ElementRef
  ) { }

  ngOnInit() {
  }
  openList() {
    // this is the flag that determine wether or not show the list of hotels(hide the list).
    this.showMenu = !this.showMenu;
  }
  onItemPicked(event) {
    // This is the event that was emitted from the component named 'my-option' with the chosen option in the list
    this.showMenu = false;
    this.chosenItem = event;
    // Here i'm emitting to the 'select-container' the chosen item that i got from the 'my-option'
    this.changedItem.emit(event);
  }
}
