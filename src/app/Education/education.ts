import { DatePipe } from '@angular/common';
import { Guid } from 'guid-typescript';

export class Education{
userId: Guid;
educationId: Guid;
degree: String;
universityName: String;
facultyName: String;
startTime: DatePipe;
endTime: DatePipe;
average: String;
activeStatus: String;

}