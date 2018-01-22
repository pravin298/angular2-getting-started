import { NgModule } from '@angular/core';
import { ProductListComponent } from "./../products/product-list.component";
import { ProductDetailComponent } from './../products/product-detail.component';

import { ProductGuardService } from './../products/product-guard.service';
import { ProductService } from './../products/product.service';

import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
    	{path:'products', component:ProductListComponent},
    	{path: 'products/:id',
    		canActivate:[ProductGuardService],
    		component:ProductDetailComponent
    	}
    ]),
    SharedModule
  ],
  declarations: [
	ProductListComponent,
	ProductDetailComponent
  ],
  providers: [
  	ProductService,
  	ProductGuardService
  ]
})
export class ProductModule { }
