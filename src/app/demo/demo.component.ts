import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarEventTitleFormatter,
} from 'angular-calendar';
import { EventCreateService, EventDetailService, EventListService, SbToastService } from 'ngtek-event-library';
import { MyCalendarEvent } from '../app.component';
import { EventServiceService } from '../services/event-service.service';
import { createEventForm, eventDetailData, eventList, filterData, myEventsList } from '../mock-data';
import { EventService } from '..';

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  yellow: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
};
@Component({
  selector: "app-demo",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
})
export class DemoComponent implements OnInit {
  colors = colors;
  filterConfig: any;
  isDetail = true;
  eventList: any;
  myEvents: any;
  eventItem: any;
  tab: string = 'list';
  userId: any = '1001';
  formFieldProperties: any;
  isLoading: boolean = true;
  eventCalender: any;
  events: MyCalendarEvent[] = [];
  Filterdata: any;
  query: any;
  calendarEvents: any;
  dates: any;
  min: any;
  max: any;
  today = new Date();
  todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate())).slice(-2);
  yesterdayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate() - 1)).slice(-2);
  tommorrowDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate() + 1)).slice(-2);

  p: number = 1;
  eventIdentifier = 'do_11322166143296307218';
  collection: any[] = [];
 libEventConfig = {
    context: {
    user: 'abc',
    identifier: '123',
    channel: 'sunbird',
    authToken: '',
    sid: 'abc124',
    uid: '1001',
    id: '1234',
    additionalCategories: 'additionalCategories',
    },
    config: {
    mode: 'list'
    }
    };
  
    
  constructor(
    private eventService: EventService,
    private router: Router,
   ) { }
    ngOnInit() {
      this.showEventListPage();
      this.showEventCreatePage();
      this.showFilters();
      this.showCalenderEvent();
      this.myEvents = myEventsList.result.Event;
    }
  
     /* For get List of events
     */
     showEventListPage()
     {
        this.Filterdata = {
        "status":["live"],
        "objectType": "Event"
        };
        
        this.eventService.getEventList().subscribe((data: any) => {
          this.eventList = eventList.result.content;
          this.isLoading = false;
        });
    }
    /**
     * For subscibe click action on event card
     */
    navToEventDetail(res: any) {
      this.eventItem = res;
      this.tab = "detail";
    }
  
    Openview(view: any)
    {
      this.isLoading = true;
      if (view == 'list') 
      {
        this.tab = 'list';
      } 
      else if (view == 'detail') 
      {
        this.tab = 'detail';
      }
      else if (view == 'enrollUsersList')
      {
        this.router.navigate(['/enroll-users'], {
          queryParams: {
            identifier: this.eventIdentifier
          }
        });
      } 
      else if (view == 'calender') 
      {
        this.tab = 'calender';
        //this.router.navigate(['/calender']);
      }
      else 
      {
        this.tab = 'form';
        this.router.navigate(['/form'], {
          queryParams: {
            // identifier: event.identifier
          }
        });
      }
      
      this.isLoading = false;
    }
  
    showEventCreatePage() {
      this.eventService.getCreateEventForm().subscribe((data: any) => {
        this.formFieldProperties = data.result['form'].data.fields
      })
    }
  
    cancel(event: any) {
      //this.router.navigate(['/home']);
    }
  
    navAfterSave(res: any) {
      //alert(res.result.identifier);
      // this.eventDetailService.getEvent(res.result.identifier).subscribe(
      //   (data: any) => {
          this.eventItem = eventDetailData.result.event;
          this.tab = "detail";
          this.isLoading = false;
  
          console.log(this.eventItem);
      //   },
      //   (err: any) => {
      //     console.log("err = ", err);
      //   }
      // );
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
          identifier: "do_11322182566085427211",
        }));
      });
    }
  
    showFilters() {
      // this.eventListService.getFilterFormConfig().subscribe((data: any) => {
        this.filterConfig = filterData.result['form'].data.fields;
        this.isLoading = false;
      // },
      // (err: any) => {
      //   console.log('err = ', err);
      // });
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
      this.tab == "list" ? this.isLoading = true : this.isLoading = false;
  
      // this.eventListService.getEventList(this.Filterdata,this.query).subscribe((data) => {
        // if (data.responseCode == "OK") 
          // {
            this.isLoading=false;
            this.eventList = eventList.result.content;
  
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
            identifier:obj.identifier,
            }));
          // }
        // }, (err) => {
        //   this.isLoading=false;
        //   this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
        // });
    }
  
  }
  