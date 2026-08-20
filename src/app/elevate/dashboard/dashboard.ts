import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  
     activeTab = 'elevate';

     constructor(private router: Router){}

     manger(){
     this.router.navigate(["/manager"])
     }

  // setTab(tab: string) {
  //   this.activeTab = tab;
  // }

  goToElevate(){
    this.router.navigate(["/elevate"])
  }


  goToMyActivities(){
    this.router.navigate(["/my-active"])
  }

  go(){
    this.router.navigate(["/others"])
  }



}
