import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {LecturerDashboardComponent} from "./lecturer-dashboard/lecturer-dashboard.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {CourseComponent} from "./course/course.component";
import {SessionComponent} from "./session/session.component";

export const routes: Routes = [
  {path:'signUp',component:RegisterComponent},
  {path:'signIn',component:LoginComponent},
  {path:'student',component:StudentDashboardComponent},
  {path:'lecturer',component:LecturerDashboardComponent},
  {path:'course',component:CourseComponent},
  {path:'session',component:SessionComponent},
  {path:'**',component:NotFoundComponent}
];
