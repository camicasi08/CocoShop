import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'app-manage-product',
    templateUrl: './manage_product.component.html',
    styleUrls: ['./manage_product.component.scss']
})

export class ManageProductComponent implements OnInit {

    private product : Product;
    id: string;
    quantity: number = 0;
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
                //this.discounts = this.product.discounts;
            }

        }
    }

    addCart(){
        if(this.quantity == 0){

            alert('Debes agregar productos');

        }else if(this.quantity > this.product.quantity){

            alert("Sólo quedan disponibles " + this.product.quantity + " productos.");

        }else{
            let cart: any = localStorage.getItem('cart');
            if(cart == null){
                console.log("1");
                cart = {};
                cart[this.product._id] = {
                    title: this.product.title,
                    description: this.product.description,
                    quantity: this.quantity,
                    price: this.product.price
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                this.router.navigate(['/'])
            }else{
                cart = JSON.parse(cart);
                if(cart[this.product._id]){
                    console.log("2");
                    let currentQuantity = cart[this.product._id].quantity +this.quantity
                    if(currentQuantity > this.product.quantity){
                        alert("Sólo quedan disponibles " + (this.product.quantity - cart[this.product._id].quantity) + " productos.");
                    }else{
                        cart[this.product._id].quantity += this.quantity;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        this.router.navigate(['/'])
                    }
                   
                }else{
                    console.log("3");
                    cart[this.product._id] = {
                        title: this.product.title,
                        description: this.product.description,
                        quantity: this.quantity,
                        price: this.product.price
                    };
                    localStorage.setItem('cart', JSON.stringify(cart));
                    this.router.navigate(['/'])
                }
               
            }

            //console.log(JSON.stringify(localStorage.getItem('cart')))
        }
    }
    navigateBack(){
        this.router.navigate(['/'])
    }

  
}
