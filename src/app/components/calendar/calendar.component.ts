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

  //TODO.. les filtres

  ngOnInit(): void{
    this.service
      .fetchAllEvents()
      .subscribe(e => this.events = e);
  };

  delete(id: number): void {
    this.service
      .removeEvent(id)
        .subscribe(success => this.events = this.events?.filter(e => e.id !== id));
  }
}
