import { Component } from '@angular/core';
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent {
  constructor(private service: EventsService) {
  }
  eventType = ['Routine','Repas','Travail','Loisir'];

  event = {
    id: 5,
    title: "",
    time: 0,
    type: ""
  };
  newEvent() {
    this.service
      .addEvent(this.event)
      .subscribe()
  }
}
