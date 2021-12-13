import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  baseURL = '61af532c3e2aba0017c491c1.mockapi.io/api/event'

  constructor(private http: HttpClient) { }

  getEventList(configURL: any) {
    return this.http.get(`${this.baseURL}/${configURL}`);
  }
 }
