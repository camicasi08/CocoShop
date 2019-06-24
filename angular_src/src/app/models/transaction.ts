import { ModelInterface } from "./model";

export class Transaction implements ModelInterface{
    id: string;
    name: string = "";
    email: string = "";
    address: string = "";
    products: any[]
    total: number;
}