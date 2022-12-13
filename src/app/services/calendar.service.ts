import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseHolidays } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private Http: HttpClient) { }

  getHolidays() {
    const BASE_URL = "https://holidayapi.com/v1/holidays";
    const CALENDAR_REGION = "CL";
    const CALENDAR_YEAR = "2021"

    const API_KEY = environment.calendarApiKey;

    const url = `${BASE_URL}/?pretty&country=${CALENDAR_REGION}&year=${CALENDAR_YEAR}&key=${API_KEY}`

    return(this.Http.get<ResponseHolidays>(url));
  }
}
