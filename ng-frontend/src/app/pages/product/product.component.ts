import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductDescriptionComponent } from "../../components/product-description/product-description.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NavbarComponent, ProductDescriptionComponent, ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  selectedItem:any = null;

  onItemSelected(item:any) {
    this.selectedItem = item;
  }

}
