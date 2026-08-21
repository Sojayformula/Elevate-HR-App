import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-set-kpi',
  imports: [],
  templateUrl: './set-kpi.html',
  styleUrl: './set-kpi.scss',
})
export class SetKpi {

  constructor (private router: Router) {}

  createKpi(){
    this.router.navigate(['/create-kpi'])
  }

  editKpi(){
    this.router.navigate(['/edit-kpi'])
  }
}
