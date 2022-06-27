import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { StatusDto } from 'src/app/DTO/status.dto';
import { DayOffService } from '../day-off.service';
import { DayOff } from '../dayOff';

@Component({
  selector: 'app-day-off-requests',
  templateUrl: './day-off-requests.component.html',
  styleUrls: ['./day-off-requests.component.scss']
})
export class DayOffRequestsComponent implements OnInit {

  dayOffId:Guid;
  dayOff:DayOff=new DayOff();
  statusDTO: StatusDto = new StatusDto();
  constructor(private dayOffService: DayOffService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dayOffId = this.route.snapshot.params['dayOffId'];

    this.dayOffService.getDayOffById(this.dayOffId).subscribe(data=>{
      this.dayOff=data;
    });
  }

  approveRequest(){
    ;
    this.dayOffService.approveDayOff(this.statusDTO).subscribe(data=>{
    ;  
      // console.log(this.statusi);
      console.log(data);
    })
  }
  public approveStatus(v){
    this.statusDTO.requestStatus=v.value;
  }
}
