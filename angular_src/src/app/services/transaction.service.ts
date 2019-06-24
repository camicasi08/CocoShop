import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";

@Injectable()
export class TransactionService extends BaseService {
    protected baseUrl : string = '/transactions'
}