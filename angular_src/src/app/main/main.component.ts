import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

    private products : Product[];
    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts(){
        this.productService.getAll()
        .subscribe( products => {
            this.products = products;
        }, error => {
            console.log(error);
        })
    }
    
}
