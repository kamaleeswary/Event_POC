import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '..';
import { enrollList, userList } from '../mock-data';
// import { UsersService } from 'ngtek-event-library/lib/events/services/users/users.service';

@Component({
  selector: 'app-enroll-users',
  templateUrl: './enroll-users.component.html',
  styleUrls: ['./enroll-users.component.scss']
})
export class EnrollUsersComponent implements OnInit {

  // eventIdentifier = 'do_11322166143296307218'
  enrollData: any;
  queryParams:any;
  userData: any;
  eventUserEnrollData: any;

  isLoading: boolean =  true;
  tab :string= 'list';
  paginateCount: number = 1;
  eventId: any;
  users:any;
  arrayEnrollUsers: any = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private eventService: EventService  ) { }

  ngOnInit() {
    // Get the url (query) params
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;
    });

    this.eventId = this.queryParams.identifier;

    // Get all enroll data of single event
    this.getEventEnrollments();
  }

/**
 * Get list of enrollment data of selected event
 */
  getEventEnrollments(){
 
    this.eventService.getEnrollEvents().subscribe((data: any) => {
      this.enrollData = data.result.content;
      
      // Get list of User data of selected event
      this.getEnrolledUsers();
    });
  }

/**
 * Get list of User data of selected event
 */
  getEnrolledUsers()
  {
    this.enrollData.forEach((event: any) => {     
      this.arrayEnrollUsers.push(event.userId);
    });

    // Get user list of data
    this.getUsers(this.arrayEnrollUsers);
  }

/**
 * Get user list of data
 */
  getUsers(userIds: any)
  {
      this.eventService.getUsers().subscribe((data: any) => {
        this.users = data.result.response;
        this.getEnrollEventUsersData(this.users);
      });
  }

/**
 * Get enroll event user list of data
 */
  getEnrollEventUsersData(users: any)
  {
    this.enrollData.forEach((event: any, index: number) => {
      users.forEach((user: any) => {
           if (user.identifier == event.userId)
           {
              this.enrollData[index].userDetail = user;
           }
      });
    });
    this.eventUserEnrollData = this.enrollData;
    console.log(this.eventUserEnrollData);
  }
  
  Openview(view: any)
  {
    this.isLoading = true;

    if(view == 'list' )
    {
      this.router.navigate(['/home']);
    }
    else if(view == 'detail')
    {
      this.tab = 'detail';
    }
    else if (view == 'enrollUsersList')
    {
      this.router.navigate(['/enroll-users'], {
        queryParams: {
          identifier: this.queryParams.identifier
        }
      });
    }
    else
    {
      this.router.navigate(['/form'], {
        queryParams: {
          identifier: '871ac12e-2170-4c6c-a07d-e933c1f64259'
        }
      });
    }

    this.isLoading = false;
  }
}
