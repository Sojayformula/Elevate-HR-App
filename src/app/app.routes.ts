import { Routes } from '@angular/router';
import { PageLayout } from './elevate/page-layout/page-layout';
import { Dashboard } from './elevate/dashboard/dashboard';
import { Elevate } from './elevate/elevat/elevate';
import { MyActivities } from './elevate/my-activities/my-activities/my-activities';
import { Others } from './elevate/others/others';
import { DepartmentPerformance } from './elevate/executive/department-performance/department-performance'; 
import { PreviousCycles } from './elevate/my-activities/previous-cycles/previous-cycles';
import { PerformanceCycles } from './elevate/hr/performance-cycles/performance-cycles';
import { SetKpi } from './elevate/hr/set-kpi/set-kpi';
import { CreateCycle } from './elevate/hr/performance-cycles/create-cycle/create-cycle';
import { EditCycle } from './elevate/hr/performance-cycles/edit-cycle/edit-cycle';
import { ManagerPerformance } from './elevate/executive/manager-performance/manager-performance'; 
import { UserElevate } from './elevate/elevate/user-elevate/user-elevate';
import { ManagerElevate } from './elevate/elevate/manager-elevate/manager-elevate';


export const routes: Routes = [


    {path: "", component: PageLayout,
        children:[
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "dashboard", loadComponent: () => import ('./elevate/dashboard/dashboard').then(m => m.Dashboard) },


    
    {path: "elevate", component: Elevate,
        children:[
            {path: "", redirectTo: 'user-elevate', pathMatch: 'full'},
            {path: "user-elevate", component: UserElevate},
            {path: "manager-elevate", component: ManagerElevate},
        ]
     },

     {path: "elevate", loadComponent: () => import ('./elevate/elevat/elevate').then(m => m.Elevate)},
    {path: "my-activities", loadComponent: () => import ('./elevate/my-activities/my-activities/my-activities').then(m => m.MyActivities)}, 
    {path: "previous-cycles", loadComponent: () => import ('./elevate/my-activities/previous-cycles/previous-cycles').then(m => m.PreviousCycles)},
    {path: "department-performance", loadComponent: () => import ('./elevate/executive/department-performance/department-performance').then(m => m.DepartmentPerformance)},
    {path: "manager-performance", loadComponent: () => import ('./elevate/executive/manager-performance/manager-performance').then(m => m.ManagerPerformance)},
    {path: "others", component: Others},
    {path: "performance-cycles", component: PerformanceCycles},
    {path: "performance-cycles/create-cycle", component: CreateCycle},
    {path: "performance-cycles/edit-cycle/:id", component: EditCycle},
    {path: "set-kpi", component: SetKpi}
       ]
    }
];
 
