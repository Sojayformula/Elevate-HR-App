import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-performance-cycles',
  imports: [RouterLink],
  templateUrl: './performance-cycles.html',
  styleUrl: './performance-cycles.scss',
})
export class PerformanceCycles {

  constructor(private router: Router) {}

  createCycle() {
    this.router.navigate(['/performance-cycles/create-cycle']);
  }

  editCycle(){
    this.router.navigate(['/performance-cycles/edit-cycle']);
  }

}


