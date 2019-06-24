import { ModelInterface} from './index';
import { Discount } from './discount';

export class Product implements ModelInterface {
    _id: string;
    title: string;
    description: string;
    price: string;
    quantity: number;
    discounts: Discount[];
    images: string[];
}