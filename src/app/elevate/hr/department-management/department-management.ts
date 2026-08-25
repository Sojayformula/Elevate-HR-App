import { Component } from '@angular/core';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-management',
  imports: [NzStepsModule, NzProgressModule ],
  templateUrl: './department-management.html',
  styleUrl: './department-management.scss',
})
export class DepartmentManagement {

  constructor(private router: Router){}

  goToDepartmentDetails(){
    this.router.navigate(['/department-details'])
  }
}
