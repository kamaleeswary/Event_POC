import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalanderComponent } from './calander/calander.component';
import { EnrollUsersComponent } from './enroll-users/enroll-users.component';
import { UserFomComponent } from './user-fom/user-fom.component';

const routes: Routes = [
  {path : '' ,redirectTo: 'mainComponent', pathMatch: 'full'},
  { path: 'enroll-users', component: EnrollUsersComponent },
  { path: 'form', component: UserFomComponent },
  { path: 'home', component: AppComponent },
  { path: 'calender', component:  CalanderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
