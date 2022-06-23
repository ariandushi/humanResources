import { Guid } from "guid-typescript";
import { TaskStatus } from "./taskStatus";

export class Task{
    taskId: Guid;
    taskName:String;
    taskStatus:TaskStatus;
    
}