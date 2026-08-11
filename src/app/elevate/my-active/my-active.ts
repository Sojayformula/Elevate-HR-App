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

}
