import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";

@Injectable()
export class ProductService extends BaseService {
    protected baseUrl : string = '/products'
}