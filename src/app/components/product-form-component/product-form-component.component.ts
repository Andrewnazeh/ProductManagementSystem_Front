import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/productService/product.service';

@Component({
  selector: 'app-product-form-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form-component.component.html',
  styleUrl: './product-form-component.component.css',
})
export class ProductFormComponentComponent implements OnInit {
  product = {
    name: '',
    description: '',
    price: 0,
  };
  errorMessage= '';
  imageUrl: File | null = null;
  token: string | null = '';
  constructor(private productService: ProductService, private Router: Router) {}
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.token = window.localStorage.getItem('token');
    }

    console.log(this.token);
  }

  onImageSelected(event: any): void {
    this.imageUrl = event.target.files[0];
  }

  onSubmit() {
    if (!this.imageUrl || !this.token) {
      console.error('No image selected');
      return;
    }
    this.productService
      .createProduct(this.product, this.imageUrl, this.token)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.Router.navigate(['/products']);
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          console.error(error);
        },
      });
  }
}
