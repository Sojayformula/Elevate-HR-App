import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-activities',
  imports: [],
  templateUrl: './my-activities.html',
  styleUrl: './my-activities.scss',
})
export class MyActivities implements OnInit{


      activeTab = 'target';
      isActiveTab = 'target';
      currentStep = 1;
      message = ""



  constructor(private router: Router){}

  
      ngOnInit(){
        
      }

      // first toggle //
  setTab(tab: string) {
    this.activeTab = tab;
  }

  //  second toggle //
  tabActive(tab: string){
    this.isActiveTab = tab
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
  if (this.currentStep < 3) {
    this.currentStep++;
  }
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

// My activity
previous(){
this.router.navigate(["/previours-cycle"])
}

// Elevate
elevate(){
this.router.navigate(["/elevate"])
}

}
