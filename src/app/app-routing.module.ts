import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {EventAddComponent} from "./components/event-add/event-add.component";
import {EventUpdateComponent} from "./components/event-update/event-update.component";

const routes: Routes = [
  {path: "", redirectTo: "calendar", pathMatch: "full"},
  {path: "events", component: CalendarComponent},
  {path: "events/add", component: EventAddComponent},
  {path: "events/update/:id", component: EventUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
