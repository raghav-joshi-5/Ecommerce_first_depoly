import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../model/data';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  prodId!: string;
  prodObj!: Iproduct;
  value: number = 1;
  selectedImage!: string;
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.prodId = this._route.snapshot.params['_id'];
    this._productService.getobj(this.prodId).subscribe((s) => {
      this.prodObj = s;
      this.selectedImage = this.prodObj.images[0];
    });
  }

  onAdd() {
    this.value++;
  }
  onMinus() {
    if (this.value > 1) {
      this.value--;
    }
  }

  onimgChnage(img: string) {
    this.selectedImage = img;
  }
}
