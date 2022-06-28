import { DatePipe } from "@angular/common";
import { Guid } from "guid-typescript";
import { DayOffStatus } from "../enums/dayOffStatus";
import { DayOffPermission } from "../enums/dayOffPermission";
import { User } from "../User/user";

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
    dayOffPermission: DayOffPermission;
    users: User;
}