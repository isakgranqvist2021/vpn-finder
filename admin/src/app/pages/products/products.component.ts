import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../services/read/read.service';
import { Product } from '../../interfaces/product';
import { HttpResponse } from '../../interfaces/http.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private router: Router, private readService: ReadService) {}

  ngOnInit() {
    this.readProducts();
  }

  readProducts() {
    this.readService.readProducts().subscribe((response: HttpResponse) => {
      if (response.success) this.products = response.data;
    });
  }

  navigate(product: Product) {
    this.router.navigate(['/edit'], {
      queryParams: { data: JSON.stringify(product) },
    });
  }
}
