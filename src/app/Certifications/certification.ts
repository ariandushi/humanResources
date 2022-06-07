import { DatePipe } from "@angular/common";
import { Guid } from "guid-typescript";

export class  Certification{
    userId:Guid;
    certificationID: Guid;
    certificationName: string;
    certificationYear: DatePipe;
    expirationDate: DatePipe;
    releasingAuthority: string;
    linkOfCertification: string;
}