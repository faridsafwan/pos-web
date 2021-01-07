import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get login() {
    return this.loginForm.controls;
  }

  onSubmitForm(e): void {
    e.preventDefault();
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // this.spinner.show();
    // this.authService.login(this.loginForm.value).subscribe({
    //   next: (result) => {
    //     if (result) {
    //       setTimeout(() => {
    //         this.spinner.hide();
    //         this.router.navigate(['']);
    //         this.notiService.showSuccess('Sign In Success', 'Welcome!');
    //       }, 1000);
    //     }
    //   },
    //   error: (err) => {
    //     if (err) {
    //       this.notiService.showError(
    //         err.error.message[0].messages[0].message,
    //         'Error'
    //       );
    //       this.spinner.hide();
    //     }
    //   },
    //   complete: () => {},
    // });
  }
}
