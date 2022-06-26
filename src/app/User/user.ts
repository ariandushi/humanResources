import { DatePipe } from '@angular/common';
import { Guid } from 'guid-typescript';
import { Project } from '../Project/project';
import { Role } from '../Roles/role';

export class User {
    userId: Guid;
    username: string;
    //password: string;
    firstName:string;
    lastName:string;
    email:string;
    dob: DatePipe;
    leaveDaysLeft: number;
    mobile: string;
    startingDay: DatePipe;
    terminationDay: DatePipe;
    secondContact: string;
    usersStatus: boolean;
    project: Project[];
    roles: Role[];
}
