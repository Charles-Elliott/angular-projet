import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../models/event";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private myUrl = 'http://localhost:3000/events';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  fetchEvent (id: number): Observable<Event> {
    return this.http.get<Event>(`${this.myUrl}/${id}`);
  }
  fetchAllEvents (): Observable<Event[]> {
    return this.http.get<Event[]>(this.myUrl);
  }
  addEvent (event: Event): Observable<Event> {
    return this.http.post<Event>(this.myUrl, event, this.httpOptions);
  }
  updateEvent (id:number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.myUrl}/${id}`, event, this.httpOptions)
  }
  removeEvent (id: number): Observable<Event> {
    return this.http.delete<Event>(`${this.myUrl}/${id}`, this.httpOptions);
  }


}
