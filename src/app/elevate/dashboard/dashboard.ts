import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-dashboard',
  imports: [NzProgressModule, NzStepsModule, RouterLink],
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

goToDepartmentManagement(){
  this.router.navigate(["/department-management"])
}

}
