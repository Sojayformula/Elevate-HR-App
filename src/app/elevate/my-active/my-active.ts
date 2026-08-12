import { Component } from '@angular/core';

@Component({
  selector: 'app-my-active',
  imports: [],
  templateUrl: './my-active.html',
  styleUrl: './my-active.scss',
})
export class MyActive {

      activeTab = 'elevate';

  setTab(tab: string) {
    this.activeTab = tab;
  }


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

}
