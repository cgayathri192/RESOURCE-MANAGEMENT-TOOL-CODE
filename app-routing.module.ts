import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () =>
    import('./home/home.module').then((m) => m.HomeModule),
},
{
  path: 'project',
  loadChildren: () => import('./project/project.module').then((m) => m.ProjectModule),
},
{
  path:'timesheet',
  loadChildren:() => import('./timesheet/timesheet.module').then((m) => m.TimesheetModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
