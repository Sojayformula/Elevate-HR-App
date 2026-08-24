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


  goToElevate(){
    this.router.navigate(["/elevate"])
  }


  goToMyActivities(){
    this.router.navigate(["/my-activities"])
  }

  go(){
    this.router.navigate(["/others"])
  }



}
