import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EventAddComponent } from './components/event-add/event-add.component';
import { AlertModule } from "ngx-bootstrap/alert";
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventUpdateComponent } from './components/event-update/event-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventAddComponent,
    NavbarComponent,
    EventUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
