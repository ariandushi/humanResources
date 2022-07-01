import { Guid } from "guid-typescript";
import { Project } from "../Project/project";
import { TaskStatus } from "./taskStatus";

export class Task{
    userId: Guid;
    projectId: Guid;
    taskId: Guid;
    taskStatus: TaskStatus;
    taskName: String;
    description: String;

}