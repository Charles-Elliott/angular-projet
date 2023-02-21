import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../models/event";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  fetchProduct (id: number): Observable<Event> {
    return this.http.get<Event>(`'http://localhost:3000/events/'${id}`);
  }

  fetchAllProducts (): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/events');
  }


}
