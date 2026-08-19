import { Routes } from '@angular/router';
import { Pagelayout } from './elevate/pagelayout/pagelayout';
import { Dashboard } from './elevate/dashboard/dashboard';
import { Elevate } from './elevate/elevate/elevate';
import { MyActive } from './uer/my-active/my-active';
import { Performance } from './uer/performance/performance';
import { Manager } from './manager/manager/manager';



export const routes: Routes = [


    {path: "", component: Pagelayout,
        children:[
    {path: "", redirectTo: "pagelayout", pathMatch: "full"},
    {path: "pagelayout", component: Pagelayout},
    {path: "dashboard", component: Dashboard},
    {path: "elevate", component: Elevate},
    {path: "my-active", component: MyActive}, 
    {path: "performance", component: Performance},
    {path: "manager", component: Manager},
    
               
       ]
    }
];