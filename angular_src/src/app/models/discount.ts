import { ModelInterface} from './index';

export class Discount implements ModelInterface {
    start: string;
    end: string;
    discount: number
}