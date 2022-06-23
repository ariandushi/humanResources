import { Guid } from "guid-typescript";
import { DayOffStatus } from "../enums/dayOffStatus";

export class StatusDto{
  
    dayOffId:Guid;
    userId:Guid;
    rejectReason:String;
    requestStatus: DayOffStatus;
}