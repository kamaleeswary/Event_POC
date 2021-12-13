import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '..';
import { MyCalendarEvent } from '../app.component';
import { colors, eventList, filterData } from '../mock-data';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {
  filterConfig: any;
  events: MyCalendarEvent[] = [];;
  dates: any;
  today = new Date();
  Filterdata: any;
  tab: string = 'list';
  query: any;
  isLoading: boolean = true;
  eventList: any;
  eventCalender: any;
  todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate())).slice(-2);
  yesterdayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate() - 1)).slice(-2);
  tommorrowDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate() + 1)).slice(-2);

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.showFilters();
    this.showCalenderEvent();
  }
  showFilters() {
    //  this.eventService.getFilterFormConfig().subscribe((data: any) => {
      this.filterConfig = filterData.result['form'].data.fields
      this.isLoading = false;
    // },
      // (err: any) => {
        // console.log('err = ', err);
      // });
  }
  showCalenderEvent() {
    this.eventService.getEventList().subscribe((data: any) => {
      this.eventCalender = data.result.content;

      this.events = this.eventCalender.map((obj: any) => ({
        start: new Date(obj.startDate),
        title: obj.name,
        starttime: obj.startTime,
        end: new Date(obj.endDate),
        color: colors.red,
        cssClass: obj.color,
        status: obj.status,
        onlineProvider: obj.onlineProvider,
        audience: obj.audience,
        owner: obj.owner,
        identifier: 'do_11322182566085427211',
      }));
    });
  }
  getFilteredData(event: any) {
    if (event.search) {
      this.Filterdata = {
        'status': ['live'],
        'objectType': 'Event',
      };
      this.query = event.target.value;
    }
    else if (event.filtersSelected && (event.filtersSelected['eventTime']) && (event.filtersSelected.eventType)) {
      switch (event.filtersSelected['eventTime']) {
        case 'Past':
          this.dates = {
            'max': this.yesterdayDate
          }
          break;
        case 'Upcoming':
          this.dates = {
            'min': this.tommorrowDate
          }
          break;
        default:
          this.dates = {
            'min': this.todayDate,
            'max': this.todayDate
          }
          break;
      }
      this.Filterdata = {
        'status': ['live'],
        'eventType': event.filtersSelected.eventType,
        'startDate': this.dates,
        'objectType': 'Event'
      };
    }
    else if (event.filtersSelected && event.filtersSelected.eventType) {
      this.Filterdata = {
        'status': ['live'],
        'eventType': event.filtersSelected.eventType,
        'objectType': 'Event'
      };
    }
    else if (event.filtersSelected && event.filtersSelected.eventTime) {
      switch (event.filtersSelected.eventTime) {
        case 'Past':
          this.dates = {
            'max': this.yesterdayDate
          }
          break;
        case 'Upcoming':
          this.dates = {
            'min': this.tommorrowDate
          }
          break;
        default:
          this.dates = {
            'min': this.todayDate,
            'max': this.todayDate
          }
          break;
      }
      this.Filterdata = {
        'status': ['live'],
        'startDate': this.dates,
        'objectType': 'Event'
      };
    }
    else {
      this.Filterdata = {
        'status': ['live'],
        'objectType': 'Event'
      };
    }

    // Loader code
    this.tab == 'list' ? this.isLoading = true : this.isLoading = false;
    this.eventList = this.eventList.filter((e: any) => e.eventType.toLowerCase().includes(this.Filterdata.eventType.toLocaleLowerCase()));

    // this.eventListService.getEventList(this.Filterdata, this.query).subscribe((data) => {
    //   if (data.responseCode == 'OK') {
        this.isLoading = false;
        // this.eventList = eventList.result.content;
        // For calendar events
        this.events = this.eventList.map((obj: any) => ({
          start: new Date(obj.startDate),
          title: obj.name,
          starttime: obj.startTime,
          end: new Date(obj.endDate),
          color: colors.red,
          cssClass: obj.color,
          status: obj.status,
          onlineProvider: obj.onlineProvider,
          audience: obj.audience,
          owner: obj.owner,
          identifier: obj.identifier,
        }));
        console.log('event obj', this.events);
    //   }
    // }, (err) => {
    //   this.isLoading = false;
    //   this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
    // });
  }
}
