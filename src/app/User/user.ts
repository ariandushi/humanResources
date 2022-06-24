import { DatePipe } from '@angular/common';
import { v4 as uuid } from 'uuid';
import { Guid } from 'guid-typescript';
import { Project } from '../Project/project';
import { DayOff } from '../dayOff/dayOff';
// import { Role } from '../role';

export class User {
    userId: Guid;
    username: string;
    password: string;
    firstName:string;
    lastName:string;
    email:string;
    dob: DatePipe;
    leaveDaysLeft: number;
    mobile: string;
    startingDay: DatePipe;
    terminationDay: DatePipe;
    secondContact: string;
    userStatus: boolean;
    project: Project;
    // role: Role;
    // token? : string;

    // projectId: Guid;
    // projectName: string;
    // startTime: string;
    // endTime:string;
    // description: string;

   // mySet: Set<Roles> = new Set<Roles>();
}
