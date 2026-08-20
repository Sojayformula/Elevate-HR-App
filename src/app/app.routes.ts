import { Routes } from '@angular/router';
import { Pagelayout } from './elevate/pagelayout/pagelayout';
import { Dashboard } from './elevate/dashboard/dashboard';
import { Elevate } from './elevate/elevate/elevate';
import { MyActive } from './uer/my-active/my-active';
import { Performance } from './uer/performance/performance';
import { Manager } from './manager/manager/manager';
import { Others } from './elevate/others/others';
import { Departments } from './elevate/cto/departments/departments';



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
    {path: "my-active", component: MyActive}, 
    {path: "performance", component: Performance},
    {path: "manager", component: Manager},
    {path: "departments", component: Departments},
    {path: "others", component: Others},
    
               
       ]
    }
];

