import {Component, OnInit} from '@angular/core';
import {Event} from "../../models/event";
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  events?: Event[];
  constructor(private service: EventsService) {  }

  ngOnInit(): void{
    this.service
      .fetchAllProducts()
      .subscribe(e => this.events = e);
  };
}
