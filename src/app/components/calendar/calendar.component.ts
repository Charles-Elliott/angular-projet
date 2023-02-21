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
  eventType = ['Routine','Repas','Travail','Loisir'];
  constructor(private service: EventsService) {  }

  ngOnInit(): void{
    this.service
      .fetchAllEvents()
      .subscribe(e => this.events = e);
  };

  delete(event: Event): void {
    this.service
      .removeEvent(event.id)
        .subscribe();
  }
}
