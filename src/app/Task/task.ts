import { Guid } from "guid-typescript";

export class Task{
    userId: Guid;
    projectId: Guid;
    taskId: Guid;
    taskStatus: String;
    taskName: String;
}