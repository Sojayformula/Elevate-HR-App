import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-employee-review',
  imports: [
    NzCollapseModule, RouterLink
  ],
  templateUrl: './employee-review.html',
  styleUrl: './employee-review.scss',
})
export class EmployeeReview {

}