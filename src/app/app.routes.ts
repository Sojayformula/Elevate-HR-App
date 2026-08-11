import { Routes } from '@angular/router';
import { Pagelayout } from './elevate/pagelayout/pagelayout';
import { User } from './elevate/user/user';
import { Dashboard } from './elevate/dashboard/dashboard';
import { Elevate } from './elevate/elevate/elevate';
import { MyActive } from './elevate/my-active/my-active';

export const routes: Routes = [


    {path: "", component: Pagelayout,
        children:[
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "dashboard", component: Dashboard},
    {path: "elevate", component: Elevate},
     {path: "myActive", component: MyActive},

        ]
    }
];
