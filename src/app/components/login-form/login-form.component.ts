import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})


export class LoginFormComponent implements OnInit {
  constructor(private snackBar: MatSnackBar){}
  hide = true;
  panelOpenState = false;
  userForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    data: new FormControl('', Validators.required)
  });

  @Input() formError: string = '';
  @Output() login = new EventEmitter();


  ngOnInit(): void {}
  openSnackBar(){
    this.snackBar.open('Register Successfully', '' , {duration : 2000});

  }
  onFormChange() {
    this.formError = '';
  }
  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset({ login: '', password: '' });
  }
}
