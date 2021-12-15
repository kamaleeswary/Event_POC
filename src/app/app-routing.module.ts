import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalanderComponent } from './calander/calander.component';
import { DemoComponent } from './demo/demo.component';
import { DetailRedirectionComponent } from './detail-redirection/detail-redirection.component';
import { EnrollUsersComponent } from './enroll-users/enroll-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFomComponent } from './user-fom/user-fom.component';
import { UserListComponent } from './user-list/user-list.component';

// const routes: Routes = [
//   {path : '' ,redirectTo: 'mainComponent', pathMatch: 'full'},
//   { path: 'enroll-users', component: EnrollUsersComponent },
//   { path: 'form', component: UserFomComponent },
//   { path: 'home', component: AppComponent },
//   { path: 'calender', component:  CalanderComponent}
// ];


const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DemoComponent },
  { path: 'redirect-detail', component: DetailRedirectionComponent },
  { path: 'list', component: UserListComponent },
  { path: 'form', component: UserFomComponent },
  { path: 'wrapper', component: UserDetailComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'enroll-users', component: EnrollUsersComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
