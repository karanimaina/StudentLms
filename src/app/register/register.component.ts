import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  @Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
  })
  showEmailForm: boolean = false;
  userType: string = 'student';
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initializeEventListeners();
  }

  initializeEventListeners(): void {
    // User type selection
    const userTypeButtons = document.querySelectorAll('.user-type');
    userTypeButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        this.selectUserType(event.target as HTMLElement);
      });
    });

    // Toggle password visibility
    const togglePasswordButton = document.getElementById('togglePassword');
    if (togglePasswordButton) {
      togglePasswordButton.addEventListener('click', () => {
        this.togglePasswordVisibility('password');
      });
    }

    // Toggle confirm password visibility
    const toggleConfirmPasswordButton = document.getElementById('toggleConfirmPassword');
    if (toggleConfirmPasswordButton) {
      toggleConfirmPasswordButton.addEventListener('click', () => {
        this.togglePasswordVisibility('confirmPassword');
      });
    }

    // Toggle between Google sign up and email form
    const emailToggleButton = document.getElementById('email-toggle');
    const backToGoogleButton = document.getElementById('back-to-google');

    if (emailToggleButton) {
      emailToggleButton.addEventListener('click', () => {
        this.showEmailForm = true;
        this.updateFormVisibility();
      });
    }

    if (backToGoogleButton) {
      backToGoogleButton.addEventListener('click', () => {
        this.showEmailForm = false;
        this.updateFormVisibility();
      });
    }
  }

  selectUserType(button: HTMLElement): void {
    const userTypeButtons = document.querySelectorAll('.user-type');
    userTypeButtons.forEach(btn => {
      btn.classList.remove('bg-white', 'text-primary', 'shadow-sm');
      btn.classList.add('text-gray-500');
    });

    button.classList.add('bg-white', 'text-primary', 'shadow-sm');
    button.classList.remove('text-gray-500');

    // Update user type based on button text
    if (button.textContent?.includes('Student')) {
      this.userType = 'student';
    } else {
      this.userType = 'lecturer';
    }
  }

  togglePasswordVisibility(field: string): void {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
      const passwordInput = document.getElementById('password') as HTMLInputElement;
      const eyeIcon = document.querySelector('#togglePassword i');

      if (passwordInput && eyeIcon) {
        if (this.passwordVisible) {
          passwordInput.type = 'text';
          eyeIcon.classList.remove('fa-eye');
          eyeIcon.classList.add('fa-eye-slash');
        } else {
          passwordInput.type = 'password';
          eyeIcon.classList.remove('fa-eye-slash');
          eyeIcon.classList.add('fa-eye');
        }
      }
    } else if (field === 'confirmPassword') {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
      const confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement;
      const eyeIcon = document.querySelector('#toggleConfirmPassword i');

      if (confirmPasswordInput && eyeIcon) {
        if (this.confirmPasswordVisible) {
          confirmPasswordInput.type = 'text';
          eyeIcon.classList.remove('fa-eye');
          eyeIcon.classList.add('fa-eye-slash');
        } else {
          confirmPasswordInput.type = 'password';
          eyeIcon.classList.remove('fa-eye-slash');
          eyeIcon.classList.add('fa-eye');
        }
      }
    }
  }

  updateFormVisibility(): void {
    const googleSignup = document.getElementById('google-signup');
    const emailForm = document.getElementById('email-form');

    if (googleSignup && emailForm) {
      if (this.showEmailForm) {
        googleSignup.classList.add('hidden');
        emailForm.classList.remove('hidden');
      } else {
        emailForm.classList.add('hidden');
        googleSignup.classList.remove('hidden');
      }
    }
  }

  onSubmit(): void {
    // Handle form submission logic here
    console.log('Registration form submitted for:', this.userType);
    // You would typically call a registration service here
  }
}
