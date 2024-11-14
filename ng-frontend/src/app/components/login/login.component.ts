import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { CommonModule } from '@angular/common';
import { SessionService } from '../../services/session-service.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule , NavbarComponent , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup

  error:boolean = false
  errorMessage:string = ''
  errorUser: boolean = false
  errorPassword: boolean = false

  constructor(private fb:FormBuilder , private authService: AuthService , private sessionService: SessionService , private router:Router){

    this.loginForm = this.fb.group({
      email : [''],
      password : ['']
    })
  }

  onSubmit() {
    this.error = false
    this.errorPassword = false
    this.errorUser = false
    const formData = this.loginForm.value;
    console.log('form data : ' , formData.email)
    this.authService.loginUser(formData.email , formData.password).subscribe(
      (response) => {
        console.log(response)
        this.sessionService.setItem('token' , response.token)
        this.router.navigate(['/products'])
      },
      
        (error) => {
          this.error = true
          this.errorMessage = error.error['message']
          if(this.errorMessage === 'User not found') this.errorUser = true
          if(this.errorMessage === 'Invalid password') this.errorPassword = true
        }
    )

  }


}


