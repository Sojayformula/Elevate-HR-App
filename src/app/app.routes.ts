import { Routes } from '@angular/router';
import { PageLayout } from './elevate/page-layout/page-layout';
import { Dashboard } from './elevate/dashboard/dashboard';
import { Elevate } from './elevate/elevate/elevate';
import { MyActivities } from './elevate/my-activities/my-activities/my-activities';
import { Others } from './elevate/others/others';
import { DepartmentPerformance } from './elevate/executive/department-performance/department-performance';
import { PreviousCycles } from './elevate/my-activities/previous-cycles/previous-cycles';


export const routes: Routes = [


    {path: "", component: PageLayout,
        children:[
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "dashboard", 
        loadComponent: () => 
        import ('./elevate/dashboard/dashboard')
        .then(m => m.Dashboard) 
    },
    // {
//   path: "dashboard",
//   loadComponent: () =>
//     import("./elevate/dashboard/dashboard")
//       .then(m => m.Dashboard)
// }

    {path: "elevate", component: Elevate},
    {path: "my-activities", component: MyActivities}, 
    {path: "previous-cycles", component: PreviousCycles},
    {path: "department-performance", component: DepartmentPerformance},
    {path: "others", component: Others},
    
               
       ]
    }
];

