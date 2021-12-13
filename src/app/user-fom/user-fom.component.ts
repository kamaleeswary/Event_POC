import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EventCreateService, EventDetailService } from 'ngtek-event-library';
import { EventService } from '..';
import { createForm, eventList } from '../mock-data';

@Component({
  selector: 'app-user-fom',
  templateUrl: './user-fom.component.html',
  styleUrls: ['./user-fom.component.scss']
})
export class UserFomComponent implements OnInit {
  isDetail = false;
  eventItem : any;
  userId : string = "999";
  formFieldProperties: any;

  constructor(private eventService: EventService,
    private eventDetailService: EventDetailService ,
    private router: Router) { 

    }

  ngOnInit() {
    console.log('user component')
    this.showEventCreatePage();
  }

  showEventCreatePage() {
    this.eventService.getCreateEventForm().subscribe((data: any) => {
      this.formFieldProperties = data.result['form'].data.fields
    })
  }
  
  cancel(){
    this.router.navigate(['/home']);
  }

  navAfterSave(res: any){
     this.eventService.getEventList().subscribe((data: any) => {
      this.eventItem = data.result.content;
    this.isDetail = true;

      console.log(this.eventItem);
    },
      (err: any) => {
        console.log('err = ', err);
      });
   this.eventItem = res.result.event;
   alert('hi');
  }
}
