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
    {path: "performance-cycles", loadComponent: () => import('./elevate/hr/performance-cycles/performance-cycles').then(m => m.PerformanceCycles)},
    {path: "performance-cycles/create-cycle", loadComponent: () => import('./elevate/hr/performance-cycles/create-cycle/create-cycle').then(m => m.CreateCycle)},
    {path: "performance-cycles/edit-cycle", loadComponent: () => import('./elevate/hr/performance-cycles/edit-cycle/edit-cycle').then(m => m.EditCycle)},
    {path: "set-kpi", loadComponent: () => import('./elevate/hr/set-kpi/set-kpi').then(m => m.SetKpi)},
    {path: "create-kpi", loadComponent: () => import('./elevate/hr/set-kpi/create-kpi/create-kpi').then(m => m.CreateKpi)},
    {path: "edit-kpi", loadComponent: () => import('./elevate/hr/set-kpi/edit-kpi/edit-kpi').then(m => m.EditKpi)},
    {path: "department-management", loadComponent: ()=> import('./elevate/hr/department-management/department-management').then(m => m.DepartmentManagement)}
]
    }
];
 
