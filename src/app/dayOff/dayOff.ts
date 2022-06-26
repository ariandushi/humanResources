import { DatePipe } from "@angular/common";
import { Guid } from "guid-typescript";
import { DayOffStatus } from "../enums/dayOffStatus";
import { PermissionType } from "../enums/permissionType";

export class DayOff{
    dayOffId: Guid;
    startDate: DatePipe;
    endDate: DatePipe;
    reason:String;
    report: String;
    rejectReason:String;
    idOffApprove: Guid;
    dayOffAmount: Number;
    userId: Guid;
    leaveDaysLeft:Number;
    requestStatus: DayOffStatus;
    permissionType: PermissionType;
}