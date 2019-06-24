import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

declare var $;
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
    @ViewChild('dataTable') table;
    dataTable: any;
    private products : Product[];
    constructor(
        private productService: ProductService,
        private router: Router
        ) { }

    ngOnInit() {
       
        this.loadProducts();
    }

    navigate(){
        this.router.navigate(["/admin/products/new"]);
    }

    loadProducts(){

       
        this.productService.getAll()
        .subscribe( products => {
            this.products = products;
            this.dataTable = $(this.table.nativeElement);
            this.dataTable.DataTable({
                "data": products,
               
                "columns":[
                    { "data": "_id"},
                    { "data": "title" },
                    { "data": "description" },
                    
                    { "data": "price" },
                    {"data": "quantity"},
                    { "data": "Command", render: function(data, type, row){
                        console.log(row);
                       
                        let result = '<a href="/admin/products/edit/'+row._id+'">'+'<button class="btn btn-sm btn-info">Editar</button></a>';
                        //result += '<a><button class="btn btn-sm btn-danger">Eliminar</button></a>' ;
                       
                        return result;
                    }}  ,
                    
             
                    
                ],
                "columnDefs": [
                    {
                    "targets": [0],
                    "visible": false
             
                    },
                ]

            });
        
        }, error => {
            console.log(error);
        })
    }
}
