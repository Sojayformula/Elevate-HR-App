import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-pagelayout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './pagelayout.html',
  styleUrl: './pagelayout.scss',
})
export class Pagelayout {


  activeTab = 'elevate';

  setTab(tab: string) {
    this.activeTab = tab;
  }

  // Active step //
   currentStep = 1;

  isCompleted(step: number): boolean {
  return step < this.currentStep;
}

isCurrent(step: number): boolean {
  return step === this.currentStep;
}

}
