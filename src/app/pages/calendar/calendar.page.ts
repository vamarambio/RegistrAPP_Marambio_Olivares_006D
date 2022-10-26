import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CalendarService } from '../../services/calendar.service';
import { Holiday } from '../../interfaces/interfaces';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  holidays: Holiday[] = [];

  constructor(private menuController: MenuController, private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendarService.getHolidays().subscribe(resp => {
      console.log('holidays', resp);
      this.holidays.push(...resp.holidays);
    })
  }

  showMenu(){
    this.menuController.open('first');
  }

}
