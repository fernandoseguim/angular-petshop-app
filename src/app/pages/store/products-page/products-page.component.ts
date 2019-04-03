import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.services';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.products$ = this.dataService.getProdutos();
  }

}
