import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {LecturerDashboardComponent} from "./lecturer-dashboard/lecturer-dashboard.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
  {path:'signUp',component:RegisterComponent},
  {path:'signIn',component:LoginComponent},
  {path:'student',component:StudentDashboardComponent},
  {path:'lecturer',component:LecturerDashboardComponent},
  {path:'**',component:NotFoundComponent}
];
