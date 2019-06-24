import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { ProductFormComponent } from './product-form.component';

//import { SectionsModule } from '../sections/sections.module';
import { ProductService } from '../../services/product.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        NgbModule,
        RouterModule,
        //SectionsModule
    ],
    declarations: [ ProductFormComponent ],
    exports:[ ProductFormComponent ],
    providers: [ ProductService ]
})
export class ProductFormModule { }
