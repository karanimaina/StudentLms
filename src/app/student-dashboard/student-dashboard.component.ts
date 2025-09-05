import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NavbarComponent
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {

  constructor(route:Router) {
  }

}
