import { Component } from '@angular/core';
import { SessionService } from '../../services/session-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  constructor(private sessionService:SessionService , private router:Router) {}

  isLogged = () => this.sessionService.getItem('token') !== ''

  logOut = () => {
    this.sessionService.emptyItem('token')
    this.router.navigate(['/login'])
  }

}
