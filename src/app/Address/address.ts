import { Guid } from "guid-typescript";

export class Address{
    userId:Guid;
    addressID:Guid;
    state:string;
    city:string;
    street:string;
    postalCode:string;
}