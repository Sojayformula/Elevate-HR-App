import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elevate',
  imports: [FormsModule, CommonModule],
  templateUrl: './elevate.html',
  styleUrl: './elevate.scss',
})
export class Elevate {


     activeTab = 'target';
      isActiveTab = 'target';
      currentStep = 1;
      totalStep = 4
      message = ""
      coments = ""


      constructor(private router: Router){}


      ngOnInit(){
        
      }

         
  // setTab(tab: string) {
  //   this.activeTab = tab;
  // }
  

  // tabActive(tab: string){
  //   this.isActiveTab = tab
  // }




tabActive(tab: string) {
  this.isActiveTab = tab;

  switch (tab) {
    case 'target':
      this.currentStep = 1;
      break;

    case 'self-review':
      this.currentStep = 2;
      break;

    case 'manager-review':
      this.currentStep = 3;
      break;

    case 'complete':
      this.currentStep = 4;
      break;
  }
}


   // ELEVATE //
   currentCycle = {
    name: '',
    targets: 'TARGET',
    performance: ''
  };

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


   currentCycles = {
    name: 'ELEVATE - Q3 (July - September 2026)',
    targets: '22 Jul - 30 Jul 2026',
    performance: '29 Sept - 7 Oct 2026'
  };

  previousCycle = [
    {
      name: 'ELEVATE - Q3 (July-September 2026)',
      targets: '22 Jul - 30 Jul 2026',
      performance: '29 Sept - 7 Oct 2026'
    },
    {
      name: 'ELEVATE - Q3 (July-September 2026)',
      targets: '22 Jul - 30 Jul 2026',
      performance: '29 Sept - 7 Oct 2026'
    },
    {
      name: 'ELEVATE - Q3 (July-September 2026)',
      targets: '22 Jul - 30 Jul 2026',
      performance: '29 Sept - 7 Oct 2026'
    }
  ];

 

  goBack() {
    this.router.navigate(["/"])
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

previous() {
  if (this.currentStep > this.totalStep) {
    this.currentStep--;
  }
}

    // first toggle //
  setStep(tab: any) {
    this.activeTab = tab;
  }


submitTarget() {
  this.nextStep();
}

submitSelfReview() {
  this.nextStep();
}

submitManagerReview() {
  this.nextStep();
}


}
