import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import  * as configData from '../environments/urlConfig';
import { EventLibraryModule, EventsModule } from 'ngtek-event-library';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EnrollUsersComponent } from './enroll-users/enroll-users.component';
import { UserFomComponent } from './user-fom/user-fom.component';
import { CalanderComponent } from './calander/calander.component';



@NgModule({
  declarations: [
    AppComponent,
    EnrollUsersComponent,
    UserFomComponent,
    CalanderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    EventLibraryModule.forChild(configData),
    EventsModule
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'https://61af532c3e2aba0017c491c1.mockapi.io/api/event'
   }
  ],
  exports: [EnrollUsersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
