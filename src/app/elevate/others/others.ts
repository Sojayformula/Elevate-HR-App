import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzStepsModule } from 'ng-zorro-antd/steps';


@Component({
  selector: 'app-others',
  imports: [NzStepsModule, CommonModule, NzProgressModule],
  templateUrl: './others.html',
  styleUrl: './others.scss',
})
export class Others {

  // openStaffPage(){
  //   const user = this.autheService.getUser()
  //   const role = user?.role?.name

  //   if(role === 'ADMIN'){
  //     this.router,navigate(["/staff/admin"])

  //   }else{
  //     if(role === 'HR'){
  //      this.router,navigate(["/staff/hr"]) 
  //     }
  //   }else{
  //     if(role === 'HR'){
  //      this.router,navigate(["/staff/manager"]) 
  //     }
  //   }
  // }


  // getUser(){
  //   const user = localStorage.getItem('user')
  //   if(!user){
  //     return null
  //   }

  //   return JSON.parse(user)
  // }


   currentSteps = signal(0);

  next(): void {
    if (this.currentSteps() < 3) {
      this.currentSteps.update(step => step + 1);
    }
  }

  previous(): void {
    if (this.currentSteps() > 0) {
      this.currentSteps.update(step => step - 1);
    }
  }


}
