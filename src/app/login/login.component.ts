import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  showEmailForm: boolean = false;
  userType: string = 'student';
  passwordVisible: boolean = false;


  constructor(private router: Router) {}

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
        this.togglePasswordVisibility();
      });
    }

    // Toggle between Google sign in and email form
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

  togglePasswordVisibility(): void {
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
  }

  updateFormVisibility(): void {
    const googleLogin = document.getElementById('google-signin');
    const emailForm = document.getElementById('email-form');

    if (googleLogin && emailForm) {
      if (this.showEmailForm) {
        googleLogin.classList.add('hidden');
        emailForm.classList.remove('hidden');
      } else {
        emailForm.classList.add('hidden');
        googleLogin.classList.remove('hidden');
      }
    }
  }

  onSubmit(): void {
      console.log('Form submitted for:', this.userType);
      if (this.userType === 'student') {
      this.router.navigate(['/student']);
    } else {
      this.router.navigate(['/lecturer']);
    }
  }
}
// Vanilla JavaScript implementation for demonstration
document.addEventListener('DOMContentLoaded', function() {
  // User type selection
  document.querySelectorAll('.user-type').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.user-type').forEach(btn => {
        btn.classList.remove('bg-white', 'text-primary', 'shadow-sm');
        btn.classList.add('text-gray-500');
      });
      // @ts-ignore
      this.classList.add('bg-white', 'text-primary', 'shadow-sm');
      // @ts-ignore
      this.classList.remove('text-gray-500');
    });
  });

  // Toggle password visibility
  const togglePassword = document.getElementById('togglePassword');
  const password = document.getElementById('password');

  if (togglePassword && password) {
    togglePassword.addEventListener('click', function() {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);

      const icon = this.querySelector('i');
      // @ts-ignore
      icon.classList.toggle('fa-eye');
      // @ts-ignore
      icon.classList.toggle('fa-eye-slash');
    });
  }

  // Toggle between Google sign in and email form
  const emailToggle = document.getElementById('email-toggle');
  const backToGoogle = document.getElementById('back-to-google');
  const googleSignin = document.getElementById('google-signin');
  const emailForm = document.getElementById('email-form');

  if (emailToggle && backToGoogle && googleSignin && emailForm) {
    emailToggle.addEventListener('click', function() {
      googleSignin.classList.add('hidden');
      emailForm.classList.remove('hidden');
    });

    backToGoogle.addEventListener('click', function() {
      emailForm.classList.add('hidden');
      googleSignin.classList.remove('hidden');
    });
  }
});

