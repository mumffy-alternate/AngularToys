import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    errorMessage: any;
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private _productService: ProductService) {
        // this.listFilter = 'cart';
    }

    ngOnInit(): void {
        // this.products = this._productService.getProducts();
        this._productService.getProductsOverHttp().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
    }

    performFilter(filterString: string): IProduct[] {
        filterString = filterString.toLocaleLowerCase();
        return this.products.filter(p => p.productName.toLocaleLowerCase().search(filterString) >= 0);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        console.log(`Notified by StarComponent ${message}`);
        this.pageTitle = `Product List! (${message})`;
    }
}
