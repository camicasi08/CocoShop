import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

import { SectionsModule } from '../sections/sections.module';
import { ProductService } from '../services/product.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule
    ],
    declarations: [ MainComponent ],
    exports:[ MainComponent ],
    providers: [ ProductService ]
})
export class MainModule { }
