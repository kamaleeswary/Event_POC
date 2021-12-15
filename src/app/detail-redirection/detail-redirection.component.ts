import { Component, OnInit , Input, Output  } from '@angular/core';
// import { EventDetailService } from '../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service';
// import { EventCreateService } from '../../../projects/event-library/src/lib/events/services/event-create/event-create.service';
import {ActivatedRoute} from '@angular/router';
import { EventService } from '..';
import { filterData } from '../mock-data';

@Component({
  selector: 'app-detail-redirection',
  templateUrl: './detail-redirection.component.html',
  styleUrls: ['./detail-redirection.component.scss']
})
export class DetailRedirectionComponent implements OnInit {

  eventItem: any;
  formFieldProperties: any;
  ViewPage: any;
  userData:any;
  eventID:any;
  constructor(private activatedRoute: ActivatedRoute,
    private eventService: EventService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.ViewPage = params.view;
      this.eventID = params.identifier;
    });
  this.showEventDetailPage(this.eventID);
  this.showEventCreatePage();
  }

  showEventDetailPage(eventID: any) {
    this.eventService.getEventList().subscribe((data: any) => {
     this.eventItem = data.result.content;
    },
      (err: any) => {
        console.log('err = ', err);
      });
  }
  showEventCreatePage() {
    // this.eventCreateService.getEventFormConfig().subscribe((data: any) => {
      this.formFieldProperties = filterData.result['form'].data.fields;
    // })
  }
  retire(event: any) {
    console.log(event)
  }
}
