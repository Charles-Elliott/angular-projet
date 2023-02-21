import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Event} from "../../models/event";

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit{
  eventType = ['Routine','Repas','Travail','Loisir'];
  event!: Event;
  constructor(private service: EventsService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.theEvent();
  }
  goBack() {
    this.location.back();
  }
  theEvent(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service
      .fetchEvent(id)
      .subscribe(e => this.event = e);
  }
  newEvent(): void {
    if(this.event) {
      this.service
        .updateEvent(this.event.id, this.event)
        .subscribe(() => this.goBack());
    }
  }
}
