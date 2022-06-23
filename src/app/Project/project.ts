import { Guid } from "guid-typescript";
import { User } from "../User/user";

export class Project{
    userId: Guid;
    username:string;
    projectId: Guid;
    projectName: string;
    startTime: string;
    endTime:string;
    description: string;
    user: User;
//    mySet: Set<User> = new Set<User>();
//   users: User[];
}