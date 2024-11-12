import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class  ProductDescriptionComponent {

  @Input() selectedProductId:any;

  product:any = null

  constructor(private productService:ProductService) {}


  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    if(changes['selectedProductId'] && this.selectedProductId) {
      this.getDescription(this.selectedProductId)
    }
    
  }

  getDescription(productId:any) {
    this.productService.getProductDesc(productId).subscribe(
      (response) => {
        this.product = response.product;
        console.log(this.product)
      }
    )
  }

}
