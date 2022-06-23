import { Guid } from "guid-typescript";

export class UserDTO{
    userId:Guid;
    oldPassword:String;
    newPassword:String;
}