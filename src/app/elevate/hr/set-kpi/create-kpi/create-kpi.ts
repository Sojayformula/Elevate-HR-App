import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-create-kpi',
  imports: [NzDropDownModule, NzIconModule, ReactiveFormsModule ],
  templateUrl: './create-kpi.html',
  styleUrl: './create-kpi.scss',
})
export class CreateKpi {
kpiForm = new FormGroup({
  department: new FormControl('', Validators.required),
  jobTitle: new FormControl('', Validators.required),

  kpis: new FormArray([this.createKpiGroup()])
});

createKpiGroup(){
  return new FormGroup({
    title: new FormControl('', Validators.required),
    weight: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(100)
    ]),
    description: new FormControl('', Validators.required)
  })
}

addKpi(){
  this.kpis.push(this.createKpiGroup()) //get another KPI block
}

get kpis(): FormArray {
  return this.kpiForm.get('kpis') as FormArray;
}

createTemplate(){
  console.log(this.kpiForm.value)
}
}
