import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-create-kpi',
  imports: [NzDropDownModule, NzIconModule ],
  templateUrl: './create-kpi.html',
  styleUrl: './create-kpi.scss',
})
export class CreateKpi {
kpiForm = new FormGroup({
  department: new FormControl('', Validators.required),
  jobTitle: new FormControl('', Validators.required)
});
}
