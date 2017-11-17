import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../product/product.component';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

// 用装饰器Injectable装饰一下才能将Router引入
@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {
    const productId = route.params['id'];
    if (productId === '1') {
      return new Product(1, 'iPhone7');
    } else if (productId === '3') {
      return new Product(3, 'iPhone8');
    } else {
      this.router.navigate(['/home']);
      return;
    }
  }
}
