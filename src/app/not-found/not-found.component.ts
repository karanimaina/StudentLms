import {Component, Renderer2} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Add interactive hover effects to all <a> elements
    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
      this.renderer.listen(anchor, 'mouseenter', () => {
        this.renderer.addClass(anchor, 'shadow-md');
        this.renderer.addClass(anchor, 'transform');
        this.renderer.addClass(anchor, 'scale-105');
      });

      this.renderer.listen(anchor, 'mouseleave', () => {
        this.renderer.removeClass(anchor, 'shadow-md');
        this.renderer.removeClass(anchor, 'transform');
        this.renderer.removeClass(anchor, 'scale-105');
      });
    });

    // Add floating effect to elements with .floating
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(el => {
      const duration = 5 + Math.random() * 3;
      (el as HTMLElement).style.animationDuration = `${duration}s`;
    });

    // Add click effects to main buttons (a tags with bg- classes)
    const mainButtons = document.querySelectorAll('a[class*="bg-"]');
    mainButtons.forEach(button => {
      this.renderer.listen(button, 'mousedown', () => this.renderer.addClass(button, 'scale-95'));
      this.renderer.listen(button, 'mouseup', () => this.renderer.removeClass(button, 'scale-95'));
      this.renderer.listen(button, 'mouseleave', () => this.renderer.removeClass(button, 'scale-95'));
    });

    // "Go back" button
    const goBackButton = document.querySelector('a:has(.fa-history)');
    if (goBackButton) {
      this.renderer.listen(goBackButton, 'click', (e: Event) => {
        e.preventDefault();
        window.history.back();
      });
    }

    // "Go back home" button
    const homeButton = document.querySelector('a:has(.fa-home)');
    if (homeButton) {
      this.renderer.listen(homeButton, 'click', (e: Event) => {
        e.preventDefault();
        alert('Navigating to home page...');
        // window.location.href = '/'; // Uncomment in real app
      });
    }

    // Console fun
    console.log('%c404 Page Not Found', 'color: #4F46E5; font-size: 24px; font-weight: bold;');
    console.log('%cLooking for something? Try navigating back or going home.', 'color: #6B7280; font-size: 16px;');

    // Keyboard navigation
    this.renderer.listen(document, 'keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        window.history.back();
      } else if (e.key.toLowerCase() === 'h') {
        alert('Navigating to home page...');
      }
    });

    // Resize listener
    this.renderer.listen(window, 'resize', () => {
      console.log('Window resized. Current width:', window.innerWidth, 'px');
    });
  }
}

