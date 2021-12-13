import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    @Inject('apiUrl') private apiUrl: any,
    private http: HttpClient) { }

  getEventList() {
    return this.http.get(`${this.apiUrl}/eventList`);
  }

  getUsers() {
    return this.http.get(`${this.apiUrl}/userList`);
  }

  getEnrollEvents() {
    return this.http.get(`${this.apiUrl}/enrolled_events`);
  }

  getCreateEventForm() {
    return this.http.get(`${this.apiUrl}/eventForm`);
  }
 }
