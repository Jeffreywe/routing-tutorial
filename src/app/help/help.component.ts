import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  errorCodes:any = {
    1: "A bad error",
    2: "A VERY bad error...",
    3: "Fly you fool!!!"
  }
  errorMessage:string = "";
  errorCode:number = -1;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let ec = +this.route.snapshot.params["ec"];
    this.errorMessage = this.errorCodes[ec];
    this.errorCode = ec;
  }

}
