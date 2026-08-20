import { Routes } from '@angular/router';
import { PageLayout } from './elevate/page-layout/page-layout';
import { Dashboard } from './elevate/dashboard/dashboard';
import { Elevate } from './elevate/elevate/elevate';
import { MyActivities } from './elevate/my-activities/my-activities/my-activities';
import { Others } from './elevate/others/others';
import { DepartmentPerformance } from './elevate/executive/department-performance/department-performance';
import { PreviousCycles } from './elevate/my-activities/previous-cycles/previous-cycles';
import { PerformanceCycles } from './elevate/hr/performance-cycles/performance-cycles';
import { SetKpi } from './elevate/hr/set-kpi/set-kpi';
import { CreateCycle } from './elevate/hr/performance-cycles/create-cycle/create-cycle';
import { EditCycle } from './elevate/hr/performance-cycles/edit-cycle/edit-cycle';


export const routes: Routes = [


    {path: "", component: PageLayout,
        children:[
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "dashboard", component: Dashboard
        // loadComponent: () => 
        // import ('./elevate/elevate/elevate.component')
        // .then(m => m.DashboardComponent) 
    },

    {path: "elevate", component: Elevate},
    {path: "my-activities", component: MyActivities}, 
    {path: "previous-cycles", component: PreviousCycles},
    {path: "department-performance", component: DepartmentPerformance},
    {path: "others", component: Others},
    {path: "performance-cycles", component: PerformanceCycles},
    {path: "performance-cycles/create-cycle", component: CreateCycle},
    {path: "performance-cycles/edit-cycle/:id", component: EditCycle},
    {path: "set-kpi", component: SetKpi}
       ]
    }
];

