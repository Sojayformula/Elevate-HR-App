import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzProgressModule } from 'ng-zorro-antd/progress';


@Component({
  selector: 'app-department-performance',
  imports: [NzProgressModule],
    standalone: true,
  templateUrl: './department-performance.html',
  styleUrl: './department-performance.scss',
})
export class DepartmentPerformance {



  constructor(private router: Router){}

  goToDashboard(){
    this.router.navigate(["/dashboard"])
  }

  goToManagers(){
    this.router.navigate(["/manager-performance"])
  }

}
