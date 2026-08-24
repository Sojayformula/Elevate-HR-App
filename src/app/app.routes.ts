import { Routes } from '@angular/router';
import { PageLayout } from './elevate/page-layout/page-layout';
import { Dashboard } from './elevate/dashboard/dashboard';
import { Elevate } from './elevate/elevate/elevate';
import { MyActivities } from './elevate/my-activities/my-activities/my-activities';
import { Others } from './elevate/others/others';
import { DepartmentPerformance } from './elevate/executive/department-performance/department-performance'; 
import { PreviousCycles } from './elevate/my-activities/previous-cycles/previous-cycles';
import { ManagerPerformance } from './elevate/executive/manager-performance/manager-performance';

export const routes: Routes = [


    {path: "", component: PageLayout,
        children:[
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "dashboard", loadComponent: () => import ('./elevate/dashboard/dashboard').then(m => m.Dashboard) },

    {path: "elevate", component: Elevate},
    {path: "my-activities", component: MyActivities}, 
    {path: "previous-cycles", component: PreviousCycles},
    {path: "department-performance", component: DepartmentPerformance},
    {path: "manager-performance", component: ManagerPerformance},
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
 
