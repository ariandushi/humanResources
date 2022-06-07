import { Guid } from "guid-typescript";

export class Address{
    addressID:Guid;
    state:string;
    city:string;
    street:string;
    postalCode:string;
}