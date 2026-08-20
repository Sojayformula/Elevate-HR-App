import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-cycle',
  imports: [ReactiveFormsModule ],
  templateUrl: './edit-cycle.html',
  styleUrl: './edit-cycle.scss',
})
export class EditCycle {
  cycleForm = new FormGroup({
  cycleName: new FormControl('', Validators.required),
  cycleStartDate: new FormControl('', Validators.required),
  cycleEndDate: new FormControl('', Validators.required),
  
  targetStartDate: new FormControl('', Validators.required),
  targetEndDate: new FormControl('', Validators.required),

  reviewStartDate: new FormControl('', Validators.required),
  reviewEndDate: new FormControl('', Validators.required),
  activateCycle: new FormControl(true),
  })

  updateCycle(){
    console.log(this.cycleForm.value)
  }
}
