import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
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


  // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
  
    //  activeTab = 'target';
      isActiveTab = 'target';
      currentStep = 1;
      totalStep = 4
      message = ""
      coments = ""

      // test
      tab = 1


      constructor(private router: Router){}


      ngOnInit(){
        
      }



tabActive(tab: string) {
  this.isActiveTab = tab;

  switch (tab) {
    case 'target':
      this.currentStep = 1;
      break;

    case 'self-review':
      this.currentStep = 2;
      break;

    case 'manager-review':
      this.currentStep = 3;
      break;

    case 'complete':
      this.currentStep = 4;
      break;
  }
  
}





   // ELEVATE //
  //  currentCycle = {
  //   name: '',
  //   targets: 'TARGET',
  //   performance: ''
  // };

  previousCycles = [
    {
      weight: 'Weight: 60%',
      application: 'Application Development & Delivery',
      name: 'TARGE',
      targets: 'Deliver 100% of assigned tasks within agreed sprint timeline',
      performance: 'Deliver 100% of assigned tasks within agreed sprint timeline'
    },
    
  ];


   currentCycles = {
    name: 'ELEVATE - Q3 (July - September 2026)',
    targets: '22 Jul - 30 Jul 2026',
    performance: '29 Sept - 7 Oct 2026'
  };

  previousCycle = [
    {
      name: 'ELEVATE - Q3 (July-September 2026)',
      targets: '22 Jul - 30 Jul 2026',
      performance: '29 Sept - 7 Oct 2026'
    },
    {
      name: 'ELEVATE - Q3 (July-September 2026)',
      targets: '22 Jul - 30 Jul 2026',
      performance: '29 Sept - 7 Oct 2026'
    },
    {
      name: 'ELEVATE - Q3 (July-September 2026)',
      targets: '22 Jul - 30 Jul 2026',
      performance: '29 Sept - 7 Oct 2026'
    }
  ];

 

  goToDashboard() {
    this.router.navigate(["/dashboard"])
  }

}
