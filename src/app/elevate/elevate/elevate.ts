import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from "ng-zorro-antd/button"


@Component({
  selector: 'app-elevate',
  imports: [FormsModule, CommonModule, NzStepsModule, NzProgressModule, NzButtonModule],
  templateUrl: './elevate.html',
  styleUrl: './elevate.scss',
})



export class Elevate {


      currentStep = 1;
      totalStep = 4
      message = ""
      coments = ""


      constructor(private router: Router){}


      ngOnInit(){
        
      }

         
    
      myactivities(){
        this.router.navigate(["/my-activities"])
      }


  goToElevate() {
    this.router.navigate(["/elevate"])
  }


    isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }


  // move to next step //
nextStep() {
  if (this.currentStep < this.totalStep) {
    this.currentStep++;
  }
}

 currentSteps = signal(0);
// Steps progress //
isActiveTabs = 'target' 
// | 'self-review' | 'manager-review' | 'complete' = 'target';


tabActive(tab: string){
  this.isActiveTabs = tab
}

// 'target' | 'self-review' | 'manager-review' | 'complete'






previousCycles = [
    {
      weight: 'Weight: 60%',
      application: 'Application Development & Delivery',
      name: 'TARGE',
      targets: 'Deliver 100% of assigned tasks within agreed sprint timeline',
      performance: 'Deliver 100% of assigned tasks within agreed sprint timeline'
    },
    {
      weight: 'Weight: 60%',
      application: 'Application Development & Delivery',
      name: 'TARGE',
      targets: 'Deliver 100% of assigned tasks within agreed sprint timeline',
      performance: 'Deliver 100% of assigned tasks within agreed sprint timeline'
    },
    {
      weight: 'Weight: 60%',
      application: 'Application Development & Delivery',
      name: 'TARGE',
      targets: 'Deliver 100% of assigned tasks within agreed sprint timeline',
      performance: 'Deliver 100% of assigned tasks within agreed sprint timeline'
    },
  ];


}



