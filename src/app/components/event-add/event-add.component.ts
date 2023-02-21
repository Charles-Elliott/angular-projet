import { Component } from '@angular/core';
import { EventsService } from "../../services/events.service";

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent {

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
