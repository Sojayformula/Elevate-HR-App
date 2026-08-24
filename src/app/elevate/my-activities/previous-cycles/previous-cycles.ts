import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-cycles',
  imports: [],
  templateUrl: './previous-cycles.html',
  styleUrl: './previous-cycles.scss',
})
export class PreviousCycles {

  

      // activeTab = 'target';
      isActiveTab = 'target';
      currentStep = 1;
      message = ""
      isActive = false;


      constructor(private router: Router){}


      ngOnInit(){
        
      }

      // first toggle //
  // setTab(tab: string) {
  //   this.activeTab = tab;
  // }




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
    this.router.navigate(["/my-activities"])
  }



  toggleActive() {
    this.isActive = !this.isActive;
  }


  // move to next step //
nextStep() {
  if (this.currentStep < 3) {
    this.currentStep++;
  }
}



}
