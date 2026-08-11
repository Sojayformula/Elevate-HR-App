import { Component } from '@angular/core';

@Component({
  selector: 'app-elevate',
  imports: [],
  templateUrl: './elevate.html',
  styleUrl: './elevate.scss',
})
export class Elevate {

      activeTab = 'elevate';

  setTab(tab: string) {
    this.activeTab = tab;
  }


}
