import { Component } from '@angular/core';
import { EventsService } from "../../services/events.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent {

  constructor(private service: EventsService,
              private location: Location) {
  }
  eventType = ['Routine','Repas','Travail','Loisir'];

  event = {
    id: 5,
    title: "",
    time: 0,
    type: ""
  };
  goBack() {
    this.location.back();
  }
  newEvent() {
    this.service
      .addEvent(this.event)
      .subscribe(() => this.goBack());
  }
}
