import { DatePipe } from "@angular/common";
import{v4 as uuid} from 'uuid';
import { Guid } from 'guid-typescript';
export class Experience {
    userId:Guid;
    expId: Guid;
    company: string;
    position: string;
    startTime: DatePipe;
    endTime: DatePipe;
    description: string;

}
