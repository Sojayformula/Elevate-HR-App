import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-cycle',
  imports: [ReactiveFormsModule ],
  templateUrl: './create-cycle.html',
  styleUrl: './create-cycle.scss',
})
export class CreateCycle {
   cycleForm = new FormGroup({
      cycleName: new FormControl('', Validators.required),
      cycleStartDate: new FormControl('', Validators.required),
      cycleEndDate: new FormControl('', Validators.required),

      targetStartDate: new FormControl('', Validators.required),
      targetEndDate: new FormControl('', Validators.required),

      reviewStartDate: new FormControl('', Validators.required),
      reviewEndDate: new FormControl('', Validators.required),
      activateCycle: new FormControl(false),
   })

  createCycle(){
    console.log(this.cycleForm.value)
  }

}
