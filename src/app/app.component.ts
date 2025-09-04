import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
interface Course {
  courseTitle: string;
  courseCode: string;
  startDate: string;
  endDate: string;
  totalSessions: number;
}

interface MediaContent {
  description: string;
  url?: string;
  type?: string;
}

interface SessionContent {
  title: string;
  content: string;
  order: number;
}

interface Session {
  id: string;
  title: string;
  summary?: string;
  sessionDate: string;
  estimatedDurationMinutes: number;
  wordCount: number;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  isCompleted: boolean;
  isAvailable: boolean;
  learningObjectives: string[];
  contents: SessionContent[];
  mediaContents?: MediaContent[];
  keyTerms: string[];
}

interface StudentProgress {
  overallCompletionPercentage: number;
  completedSessions: string[];
  totalTimeSpentMinutes: number;
  averageSessionScore: number;
}

interface SessionStatus {
  icon: string;
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // // Properties
  // currentSession: Session | null = null;
  // selectedCourse: Course | null = null;
  // availableSessions: Session[] = [];
  // studentProgress: StudentProgress | null = null;
  //
  // constructor() {}
  //
  // ngOnInit(): void {
  //   this.initializeData();
  // }

  // // Initialize mock data
  // private initializeData(): void {
  //   this.selectedCourse = {
  //     courseTitle: 'Introduction to Web Development',
  //     courseCode: 'CS101',
  //     startDate: '2024-01-15',
  //     endDate: '2024-05-15',
  //     totalSessions: 12
  //   };
  //
  //   this.studentProgress = {
  //     overallCompletionPercentage: 65,
  //     completedSessions: ['1', '2', '3'],
  //     totalTimeSpentMinutes: 480,
  //     averageSessionScore: 87.5
  //   };
  //
  //   this.availableSessions = [
  //     {
  //       id: '1',
  //       title: 'HTML Fundamentals',
  //       summary: 'Learn the basics of HTML structure and semantic elements',
  //       sessionDate: '2024-01-15',
  //       estimatedDurationMinutes: 45,
  //       wordCount: 850,
  //       difficulty: 'Easy',
  //       isCompleted: false,
  //       isAvailable: true,
  //       learningObjectives: [
  //         'Understand HTML document structure',
  //         'Learn semantic HTML elements',
  //         'Create well-formed HTML documents'
  //       ],
  //       contents: [
  //         {
  //           title: 'Introduction to HTML',
  //           content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages...',
  //           order: 1
  //         },
  //         {
  //           title: 'HTML Document Structure',
  //           content: 'Every HTML document has a basic structure that includes DOCTYPE, html, head, and body elements...',
  //           order: 2
  //         }
  //       ],
  //       mediaContents: [
  //         {
  //           description: 'HTML Document Structure Diagram'
  //         }
  //       ],
  //       keyTerms: ['HTML', 'Semantic Elements', 'DOCTYPE', 'Tags', 'Attributes']
  //     },
  //     {
  //       id: '2',
  //       title: 'CSS Styling Basics',
  //       summary: 'Introduction to CSS selectors, properties, and the box model',
  //       sessionDate: '2024-01-22',
  //       estimatedDurationMinutes: 60,
  //       wordCount: 1200,
  //       difficulty: 'Medium',
  //       isCompleted: false,
  //       isAvailable: true,
  //       learningObjectives: [
  //         'Master CSS selectors',
  //         'Understand the CSS box model',
  //         'Apply basic styling to HTML elements'
  //       ],
  //       contents: [
  //         {
  //           title: 'CSS Selectors',
  //           content: 'CSS selectors are patterns used to select elements you want to style...',
  //           order: 1
  //         }
  //       ],
  //       keyTerms: ['CSS', 'Selectors', 'Box Model', 'Properties', 'Values']
  //     },
  //     {
  //       id: '3',
  //       title: 'JavaScript Introduction',
  //       summary: 'Getting started with JavaScript variables, functions, and DOM manipulation',
  //       sessionDate: '2024-01-29',
  //       estimatedDurationMinutes: 90,
  //       wordCount: 1800,
  //       difficulty: 'Medium',
  //       isCompleted: false,
  //       isAvailable: true,
  //       learningObjectives: [
  //         'Understand JavaScript syntax',
  //         'Work with variables and functions',
  //         'Manipulate the DOM'
  //       ],
  //       contents: [
  //         {
  //           title: 'Variables and Data Types',
  //           content: 'JavaScript variables are containers for storing data values...',
  //           order: 1
  //         }
  //       ],
  //       keyTerms: ['JavaScript', 'Variables', 'Functions', 'DOM', 'Events']
  //     },
  //     {
  //       id: '4',
  //       title: 'Responsive Web Design',
  //       summary: 'Learn to create websites that work on all devices using CSS Grid and Flexbox',
  //       sessionDate: '2024-02-05',
  //       estimatedDurationMinutes: 75,
  //       wordCount: 1500,
  //       difficulty: 'Hard',
  //       isCompleted: false,
  //       isAvailable: true,
  //       learningObjectives: [
  //         'Master CSS Flexbox',
  //         'Understand CSS Grid',
  //         'Create responsive layouts'
  //       ],
  //       contents: [
  //         {
  //           title: 'Mobile-First Design',
  //           content: 'Mobile-first design is an approach to web design that prioritizes mobile devices...',
  //           order: 1
  //         }
  //       ],
  //       keyTerms: ['Responsive Design', 'Flexbox', 'CSS Grid', 'Media Queries', 'Mobile-First']
  //     },
  //     {
  //       id: '5',
  //       title: 'Advanced JavaScript Concepts',
  //       summary: 'Dive deeper into JavaScript with closures, promises, and async/await',
  //       sessionDate: '2024-02-12',
  //       estimatedDurationMinutes: 120,
  //       wordCount: 2200,
  //       difficulty: 'Hard',
  //       isCompleted: false,
  //       isAvailable: false,
  //       learningObjectives: [
  //         'Understand closures and scope',
  //         'Master asynchronous JavaScript',
  //         'Work with APIs and fetch'
  //       ],
  //       contents: [
  //         {
  //           title: 'Closures and Scope',
  //           content: 'A closure is a function that has access to variables in its outer scope...',
  //           order: 1
  //         }
  //       ],
  //       keyTerms: ['Closures', 'Promises', 'Async/Await', 'APIs', 'Fetch']
  //     }
  //   ];
  // }
  //
  // // Navigation methods
  // startSession(session: Session): void {
  //   if (session.isAvailable && !session.isCompleted) {
  //     this.currentSession = session;
  //   }
  // }
  //
  // backToSessions(): void {
  //   this.currentSession = null;
  // }
  //
  // completeSession(sessionId: string): void {
  //   const session = this.availableSessions.find(s => s.id === sessionId);
  //   if (session) {
  //     session.isCompleted = true;
  //
  //     // Update progress
  //     if (this.studentProgress && !this.studentProgress.completedSessions.includes(sessionId)) {
  //       this.studentProgress.completedSessions.push(sessionId);
  //       this.studentProgress.totalTimeSpentMinutes += session.estimatedDurationMinutes;
  //
  //       // Recalculate completion percentage
  //       this.studentProgress.overallCompletionPercentage =
  //         (this.studentProgress.completedSessions.length / this.availableSessions.length) * 100;
  //
  //       // Unlock next session if available
  //       const currentIndex = this.availableSessions.findIndex(s => s.id === sessionId);
  //       if (currentIndex < this.availableSessions.length - 1) {
  //         this.availableSessions[currentIndex + 1].isAvailable = true;
  //       }
  //     }
  //   }
  //
  //   this.backToSessions();
  // }
  //
  // // Utility methods
  // getSessionStatus(session: Session): SessionStatus {
  //   if (session.isCompleted) {
  //     return { icon: 'check-circle', color: 'text-green-500' };
  //   } else if (session.isAvailable) {
  //     return { icon: 'play-circle', color: 'text-blue-500' };
  //   } else {
  //     return { icon: 'lock', color: 'text-gray-400' };
  //   }
  // }
  //
  // getDifficultyColor(difficulty: string): string {
  //   switch (difficulty.toLowerCase()) {
  //     case 'easy':
  //       return 'bg-green-100 text-green-800';
  //     case 'medium':
  //       return 'bg-yellow-100 text-yellow-800';
  //     case 'hard':
  //       return 'bg-red-100 text-red-800';
  //     default:
  //       return 'bg-gray-100 text-gray-800';
  //   }
  // }
  //
  // formatDate(dateString: string): string {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString('en-US', {
  //     year: 'numeric',
  //     month: 'short',
  //     day: 'numeric'
  //   });
  // }
  //
  // roundPercentage(value: number): number {
  //   return Math.round(value);
  // }
}
