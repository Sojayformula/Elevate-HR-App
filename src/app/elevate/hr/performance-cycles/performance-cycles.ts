import { Component } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-performance-cycles',
  imports: [NzModalModule, NzStepsModule, FormsModule ],
  templateUrl: './performance-cycles.html',
  styleUrl: './performance-cycles.scss'
})
export class PerformanceCycles {

  isEditModal = false;

  selectedCycle = '';
  cycleName = '';
  reviewPeriod = '';
  startDate = '';
  endDate = '';
  status = '';

  openEditModal(cycle: string) {
    this.selectedCycle = cycle;
    console.log("edit clicked", cycle)

    if (cycle === 'Q3') {
      this.cycleName = 'ELEVATE – Q3 (July – September 2026)';
      this.reviewPeriod = 'Q3 2026';
      this.startDate = '22 Jul 2026';
      this.endDate = '7 Oct 2026';
      this.status = 'Active';
    }

    if (cycle === 'Q4') {
      this.cycleName = 'ELEVATE – Q4 (October – December 2026)';
      this.reviewPeriod = 'Q4 2026';
      this.startDate = '20 Oct 2026';
      this.endDate = '8 Jan 2027';
      this.status = 'Upcoming';
    }

    this.isEditModal = true;
  }

  closeEditModal() {
    this.isEditModal = false;
  }

  saveChanges() {
    this.isEditModal = false;
  }
}