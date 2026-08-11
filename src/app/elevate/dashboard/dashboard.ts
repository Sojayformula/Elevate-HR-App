import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {


        activeTab = 'elevate';

  setTab(tab: string) {
    this.activeTab = tab;
  }

}
