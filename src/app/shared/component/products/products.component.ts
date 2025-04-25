import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../model/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  prodArr!: Iproduct[];
  isImageOne = true;

  isLike: boolean = false;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    // this._productService.fetchallproduct().subscribe((s) => {
    //   this.prodArr = s;
    // });

    this._productService.fetchallproduct('Mobiles').subscribe((res) => {
      this.prodArr = res;
      // console.log(this.prodArr);
    });
  }

  visibilility(event: Event) {
    event.stopPropagation();
    this.isLike = !this.isLike;
  }
}
