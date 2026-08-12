import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elevate',
  imports: [],
  templateUrl: './elevate.html',
  styleUrl: './elevate.scss',
})
export class Elevate {

 
 activeTab = 'dashboard';

  setTab(tab: string) {
    this.activeTab = tab;
  }


  constructor(private router: Router){}




  // ELEVATE //
   currentCycle = {
    name: 'ELEVATE - Q3 (July - September 2026)',
    targets: '22 Jul - 30 Jul 2026',
    performance: '29 Sept - 7 Oct 2026'
  };

  previousCycles = [
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

  viewCycle(cycle: any) {
    console.log('Viewing cycle:', cycle);
  }

  goBack() {
    
  }

  topView(){
     this.router.navigate(["/my-active"])
  }

}
