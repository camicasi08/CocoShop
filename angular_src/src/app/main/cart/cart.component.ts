import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

    private products : Product[];
    cartProducts: any[] = [];
    total : number = 0;
    show = false;
    success = false;
    private transaction: Transaction;
    constructor(private productService: ProductService,
        private tranService: TransactionService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.loadProducts();
        this.transaction = new Transaction();
    }

    loadProducts(){
        this.total = 0;
        this.cartProducts = [];
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(cart != null){
            Object.keys(cart).map(key => {
                let product = cart[key]
                let row = {
                    _id: key,
                    title: product.title,
                    description: product.description,
                    quantity:  parseFloat(product.quantity),
                    price: parseFloat(product.price),
                    total: parseFloat(product.quantity) * parseFloat(product.price)
    
                }
                this.total += row.total;
                this.cartProducts.push(row);
            })
            console.log(this.cartProducts);
        }
    }

    removeProduct(id:string){
        let cart = JSON.parse(localStorage.getItem('cart'))
        delete cart[id]
        localStorage.setItem('cart', JSON.stringify(cart));
        this.loadProducts();
    }

    showInfo(){
        this.show = true;
    }

    validate(): boolean {
        return !(this.transaction.name !=""  && this.transaction.address != ""  && this.transaction.email != "");
    }

    checkout() {
        this.transaction.total = this.total;
        this.transaction.products = this.cartProducts;
        this.tranService.create(this.transaction).subscribe(result => {
            if(result){
                for (let index = 0; index < this.cartProducts.length; index++) {
                    const product = this.cartProducts[index];
                    this.updateProduct(product);
                }

                console.log("ACTUALIZADO")
                this.success = true;
                localStorage.clear();
              
            }
        }, error => {

        })
        console.log(this.transaction);
    }

    updateProduct(cart_product){
        this.productService.getById(cart_product._id).subscribe(product => {
            if(product){
                product.quantity = product.quantity - cart_product.quantity;
                this.productService.update(product).subscribe(result =>{
                    if(result){
                        console.log("Producto Actualizado")
                    }
                }, error =>{
                    console.log(error);
                })

            }
        }, error2=>{
            console.log(error2);
        })
    }

    navigateBack(){
        this.router.navigate(['/'])
    }

  
}
