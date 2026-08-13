import { Routes } from '@angular/router';
import { Pagelayout } from './elevate/user/userpagelayout/pagelayout';
import { Dashboard } from './elevate/user/dashboard/dashboard';
import { Elevate } from './elevate/elevate/elevate';
import { MyActive } from './elevate/user/my-active/my-active';

export const routes: Routes = [


    {path: "", component: Pagelayout,
        children:[
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "dashboard", component: Dashboard},
     {path: "elevate", component: Elevate},
     {path: "my-active", component: MyActive},

        ]
    }
];
