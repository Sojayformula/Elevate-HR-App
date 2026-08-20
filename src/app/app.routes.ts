import { Routes } from '@angular/router';
import { Pagelayout } from './elevate/pagelayout/pagelayout';
import { Dashboard } from './elevate/dashboard/dashboard';
import { Elevate } from './elevate/elevate/elevate';
import { MyActivities } from './elevate/my-activitie/my-activities/my-activities';
import { Others } from './elevate/others/others';
import { PrevioursCycle } from './elevate/my-activitie/previours-cycle/previours-cycle';
import { DepartmentPerformance } from './elevate/executive/department-performance/department-performance';



export const routes: Routes = [


    {path: "", component: Pagelayout,
        children:[
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "dashboard", component: Dashboard
        // loadComponent: () => 
        // import ('./elevate/elevate/elevate.component')
        // .then(m => m.DashboardComponent) 
    },

    {path: "elevate", component: Elevate},
    {path: "my-activities", component: MyActivities}, 
    {path: "previours-cycle", component: PrevioursCycle},
    {path: "department-performance", component: DepartmentPerformance},
    {path: "others", component: Others},
    
               
       ]
    }
];

