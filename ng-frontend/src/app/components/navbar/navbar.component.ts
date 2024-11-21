import { Component } from '@angular/core';
import { SessionService } from '../../services/session-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  constructor(private sessionService:SessionService , private authService:AuthService , private router:Router) {}

  isLogged = () => this.authService.isTokenValid(this.sessionService.getItem('token') as string)

  logOut = () => {
    this.sessionService.emptyItem('token')
    this.router.navigate(['/login'])
  }

}
