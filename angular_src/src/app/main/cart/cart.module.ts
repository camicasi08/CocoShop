import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';

import { SectionsModule } from '../../sections/sections.module';
import { ProductService } from '../../services/product.service';
import { TransactionService } from 'src/app/services/transaction.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule
    ],
    declarations: [ CartComponent ],
    exports:[ CartComponent ],
    providers: [ ProductService, TransactionService ]
})
export class CartModule { }
