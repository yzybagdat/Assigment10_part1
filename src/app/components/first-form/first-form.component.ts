import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      firstName: new FormControl(null),
      lastName: new FormControl(null)
    });
  }


  submit() {
    if ( this.form.invalid) {
      return;
    }
    this.submitted = false;

    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName
    };

    console.log(user);

    this.form.reset()
  }

}
