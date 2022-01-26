import { Component, Inject, OnInit } from '@angular/core';
import { hxgn_Calendar } from 'src/app/models/hxgn_Calendar';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-list-feriado',
  templateUrl: './list-feriado.component.html',
  styleUrls: ['./list-feriado.component.css']
})
export class ListFeriadoComponent implements OnInit {

  public holidays: hxgn_Calendar[];

  url_base:string;
  result: string;

  constructor(private calendarService:CalendarService, @Inject('BASE_URL') baseUrl: string) {
    this.url_base = baseUrl;

    
    this.calendarService.getCalendar(baseUrl+ "api/Calendar/").subscribe(result => {
      console.log(result);
      this.holidays = result;
    }, error => console.error(error));
   
  }

  ngOnInit() {
  }

}
