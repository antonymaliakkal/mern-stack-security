import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';
import { ProductDescriptionComponent } from "../product-description/product-description.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDescriptionComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {


  productList:any[] = []
  highlightedIitem:any = null
  @Output() selectedProduct:any = new EventEmitter<null>();


  constructor(private productService:ProductService){
  }
  async ngOnInit(): Promise<void> {
    await this.getProductList()

  }

  getProductList() {
    this.productService.getProductList().subscribe(
      (response) => {
        console.log(response)
        this.productList = response.productList
        console.log(this.productList)

      },
      (error) => console.error('Error from product-list : ' , error)
    )
  }

  onSelection(item:any) {
    this.highlightedIitem = item
    this.selectedProduct.emit(item.id)
  }


}
