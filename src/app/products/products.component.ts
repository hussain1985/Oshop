import { Component } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  constructor(private prodcutService: ProductService, private route: ActivatedRoute ) {
    prodcutService.getAll().subscribe(p => {
      this.products = p;
      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ? this.products.filter(p=>p.category===this.category) : this.products;
      });
    });




  }



}
