import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { eventList } from '../mock-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    private router: Router) { }
    eventList: any;
    Filterdata:any;


  ngOnInit() {
    this.showEventListPage();

  }

  /**
   * For get List of events
   */
  showEventListPage()
  {
    this.Filterdata ={
      "status":[],
      "objectType": "Event"
    };
    // this.eventListService.getEventList(this.Filterdata).subscribe((data:any)=>{
      this.eventList = eventList.result.content;
    // })
  }

  navToEventDetail(res: any){

    console.log({res});
    this.router.navigate(['home'], {
      queryParams: {
        identifier: res.identifier,
        view: 'home'
      }
    });
    }
  
}
