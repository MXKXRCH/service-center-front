import { Employee } from './employee';
import { Gadget } from './gadget';
import { Repair } from './repair';

export class Ordering {
    id! : number;
    gadget! : Gadget;
    employee! : Employee;
    startDate! : Date;
    endDate! : Date;
    description! : string;
    repairs! : Repair[];
    totalPrice! : number;
}
