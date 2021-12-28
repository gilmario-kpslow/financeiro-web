import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Output() action = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(event: any): void {
    this.action.emit(event);
  }

}
