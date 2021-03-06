import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: number;
  productName: string;
  constructor(private routerInfo: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    // this.routerInfo.params.subscribe((params: Params) => {   // 路由参数订阅，建议所有的页面都使用参数订阅的方式取参数
    //   this.productId = params['id'];
    //   this.productName = params['name'];
    // });
    this.routerInfo.data.subscribe((data: { product: Product }) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
    // this.productId = this.router.snapshot.params['id'];  // 路由参数快照，不同属性页面之间显示的时候可以使用
    // this.productName = this.router.snapshot.params['name'];
  }
  toProductDesc () {
    this.router.navigate(['./'], {relativeTo: this.routerInfo});
  }
  toSeller () {
    this.router.navigate(['./seller', 19], {relativeTo: this.routerInfo, replaceUrl: true});
  }
}

export class Product {
  constructor(public id: number, public name: string) {}
}
