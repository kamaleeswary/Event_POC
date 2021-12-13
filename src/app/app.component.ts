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
import { createEventForm, eventList, filterData } from './mock-data';
import { EventService } from './services/event.service';
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

export interface MyCalendarEvent extends CalendarEvent {
  venue?: {
    name?: string;
  };
  code?: string;
  registrationStartDate?: string;
  keywords?: [];

  description?: string;
  language?: [];
  source?: string;
  createdOn?: string;
  objectType?: string;
  registrationEndDate?: string;
  lastUpdatedOn?: string;
  starttime?: string;
  contentType?: string;
  trackable?: {
    enabled?: string;
    autoBatch?: string;
  };
  onlineProviderData?: {
    meetingLink?: string;
  };
  identifier?: string;
  lastStatusChangedOn?: string;
  createdFor?: [];
  audience?: [];
  visibility?: string;
  consumerId?: string;
  eventType?: string;
  languageCode?: [];
  version?: number;
  versionKey?: string;
  leafNodesCount?: number;
  endTime?: string;
  status?: string;
  owner?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    private eventCreateService: EventCreateService,
    private eventDetailService: EventDetailService,
    private router: Router,
    private sbToastService: SbToastService) { }

  ngOnInit() {
    this.showEventListPage();
    this.showFilters();
  }

  /* For get List of events
  */
  showEventListPage() {
    this.Filterdata = {
      'status': ['live'],
      'objectType': 'Event'
    };
    this.eventService.getEventList().subscribe((data: any) => {
      this.eventList = data.result.content;
      this.isLoading = false;
    });
  }
  /**
   * For subscibe click action on event card
   */
  navToEventDetail(res: any) {
    this.eventItem = res;
    this.tab = 'detail';
  }

  Openview(view: any) {
    this.tab = view;
      this.isLoading = true;
      if (view == 'list') 
      {
        this.tab = 'list';
        this.router.navigate(['']);

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
        this.router.navigate(['/calender']);
      }
      else if (view == 'form')
      {
        this.router.navigate(['/form']);
      }
      
      this.isLoading = false;
    }


  showFilters() {
    // this.eventListService.getFilterFormConfig().subscribe((data: any) => {
      this.filterConfig = filterData.result['form'].data.fields
      this.isLoading = false;
    // },
    //   (err: any) => {
    //     console.log('err = ', err);
    //   });
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
