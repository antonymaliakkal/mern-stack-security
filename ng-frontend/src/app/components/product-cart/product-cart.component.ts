import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { SessionService } from '../../services/session-service.service';
import * as jwt from 'jwt-decode';
import { CommonModule } from '@angular/common';

interface CustomJwtPayload extends jwt.JwtPayload {
  userId: string;
  userName: string;
}

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [NavbarComponent , CommonModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  products: any = {};

  constructor(
    private cartService: CartService,
    private sessionService: SessionService
  ) {
    this.get();
  }

  get() {
    const token = jwt.jwtDecode<CustomJwtPayload>(
      this.sessionService.getItem('token') as string
    );
    const userId = token.userId;

    this.cartService.viewCart(userId).subscribe(
      (response) => {
        console.log(response.cart);
        this.products = response.cart;
      },
      (error) => console.error(error)
    );
  }
}
