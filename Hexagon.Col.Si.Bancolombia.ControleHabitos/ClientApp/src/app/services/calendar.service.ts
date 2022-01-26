import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hxgn_Calendar } from '../models/hxgn_Calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http:HttpClient) { }

  saveCalendar(calendar:hxgn_Calendar, url:string):Observable<hxgn_Calendar>{
    return this.http.post<hxgn_Calendar>(url,calendar);
  }

  getCalendar(url:string):Observable<hxgn_Calendar[]>{
    return this.http.get<hxgn_Calendar[]>(url);
  }

  
  getCurrentCalendar(url:string):Observable<hxgn_Calendar>{
    console.log(url);
    return this.http.get<hxgn_Calendar>(url);
  }

  updateCalendar(calendar:hxgn_Calendar, url:string):Observable<hxgn_Calendar>{
    return this.http.put<hxgn_Calendar>(url, calendar);
  }
}
