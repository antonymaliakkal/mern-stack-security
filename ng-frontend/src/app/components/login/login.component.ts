import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { CommonModule } from '@angular/common';
import { SessionService } from '../../services/session-service.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule , NavbarComponent , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup
  constructor(private fb:FormBuilder , private authService: AuthService , private sessionService: SessionService){

    this.loginForm = this.fb.group({
      email : [''],
      password : ['']
    })
  }

  onSubmit() {

    const formData = this.loginForm.value;
    console.log('form data : ' , formData.email)
    this.authService.loginUser(formData.email , formData.password).subscribe(
      (response) => {
        console.log(response)
        this.sessionService.setItem('token' , response.token)
      },
      
        (error) => console.error(error)
    )

  }


}
