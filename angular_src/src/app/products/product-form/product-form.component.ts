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
                this.product.discounts.map(discount =>{
                    const startYear = new Date(discount.start).getFullYear()
                    const startMonth = new Date(discount.start).getMonth()
                    const startDay = new Date(discount.start).getDate()
                    discount.start= {
                        year: startYear,
                        month: startMonth,
                        day : startDay,
                    }

                    const endYear = new Date(discount.end).getFullYear()
                    const endtMonth = new Date(discount.end).getMonth()
                    const endDay = new Date(discount.end).getDate()
                    discount.end= {
                        year: endYear,
                        month: endtMonth,
                        day : endDay,
                    }
                    console.log(discount);
                })

                this.discounts = this.product.discounts;
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

    save()  {
        //console.log(this.product);
        this.discounts.map(discount => {
            let start = new Date(discount.start.year, discount.start.month, discount.start.day).toISOString()
            let end = new Date(discount.end.year, discount.end.month, discount.end.day).toISOString()
            discount.start = start;
            discount.end = end;
        })
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

    deleteDiscount(index){
        //const discount = this.discounts[index];
        this.discounts.splice( index, 1 );
    }

    
}
