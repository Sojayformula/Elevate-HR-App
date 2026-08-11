import { Routes } from '@angular/router';
import { Employee } from './elevat/employee/employee';
import { Leave } from './elevat/leave/leave';
import { Pagelayout } from './elevat/pagelayout/pagelayout';

export const routes: Routes = [


    {path: "", component: Pagelayout,
        children:[
    {path: "", redirectTo: "employee", pathMatch: "full"},
    {path: "employee", component: Employee},
    {path: "leave", component: Leave},

        ]
    }
];
