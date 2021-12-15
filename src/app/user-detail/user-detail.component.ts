import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { eventDetailData } from '../mock-data';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  eventItem: any;
  eventList: any;
  userId: any = "123";
  constructor(
    private activatedRoute : ActivatedRoute
  
   ) { }

  ngOnInit() {
    this.showEventDetailPage();
  }

 async showEventDetailPage() {
    // await this.eventDetailService.getEvent('do_1132472335546777601366').subscribe((data: any) => {
      this.eventItem = eventDetailData.result.event;
      console.log(this.eventItem);
    // },
    //   (err: any) => {
    //     console.log('err = ', err);
    //   });
  }

}
