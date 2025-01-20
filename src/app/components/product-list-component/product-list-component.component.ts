import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productService/product.service';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css',
})
export class ProductListComponentComponent implements OnInit {
  products: any[] = [];
  errorMessages: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = [...data.data.products];
      },
      error: (error) => {
        this.errorMessages = error;
        console.error(error);
      },
    });
  }
}
