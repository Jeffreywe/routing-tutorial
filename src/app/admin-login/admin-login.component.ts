import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const passWord:string = "admin";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  placement:string = "";
  message:string = "Wrong password";
  adminPassword:string = "";
  constructor(
    private router: Router
  ) { }

  clicked(): void {
    if(this.adminPassword === passWord) {
      this.router.navigateByUrl("/admin");
    } 
    if(this.adminPassword != passWord) {
      this.placement = this.message;
    }
  }

  ngOnInit(): void {
  }

}
