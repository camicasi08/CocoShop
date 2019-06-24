import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Discount } from 'src/app/models/discount';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})

export class ProductFormComponent implements OnInit {

    product : Product;
    discounts: Discount[];
    id: string;
    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id']; // --> Name must match wanted parameter
        });
        if (this.id) {
            this.productService.getById(this.id).subscribe(product => {
                this.product = product;
            }, error2 => {

            })
        } else {
            if (!this.product) {
                this.product = new Product();
                this.product.discounts = [];
                this.discounts = this.product.discounts;
            }

        }
    }

    save() :void {
        console.log(this.product);
        this.product.discounts = this.discounts;
        if(this.product._id){
            this.productService.update(this.product).subscribe(response =>{
                if(response){
                    console.log(response);
                    this.router.navigate(["/admin/products"])
                }
            }, error =>{
                console.log("Error", error);
            })
        }else{
            this.productService.create(this.product).subscribe(response =>{
                if(response){
                    console.log(response);
                    this.router.navigate(["/admin/products"])
                }
            }, error =>{
                console.log("Error", error);
            })
        }
       
    }

    addDiscount(){
        let discount = new Discount();
        this.discounts.push(discount);
    }

    navigateBack(){
        this.router.navigate(["/admin/products"])
    }

    deleteProduct(){
        this.productService.delete(this.id).subscribe(result =>{
            if(result){
                this.router.navigate(["/admin/products"])
            }
        }, error =>{
            console.log(error);
        })
    }

    
}
