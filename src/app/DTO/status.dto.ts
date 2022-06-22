import { Guid } from "guid-typescript";
import { DayOffStatus } from "../enums/dayOffStatus";

export class StatusDto{
    status = DayOffStatus.APPROVED;
    dayOffId:Guid;
    userId:Guid;
    rejectReason:string;
}