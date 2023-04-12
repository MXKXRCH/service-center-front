import { GadgetType } from "./gadget-type";

export class Gadget {
    id! : number;
    name! : string;
    guarantee! : number;
    gadgetType! : GadgetType;
}
