import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-task',
    loadChildren:  () => import('./add-task/add-task.component').then(x => x.AddTaskComponent)
},
{
  path: 'autentication',
  loadChildren:  () => import('./autentication/autentication.component').then(x => x.AutenticationComponent)
},
{
  path: 'del-task',
  loadChildren:  () => import('./del-task/del-task.component').then(x => x.DelTaskComponent)
},
{
  path: 'list-task',
  loadChildren:  () => import('./list-task/list-task.component').then(x => x.ListTaskComponent)
},

{
  path: 'mod-task',
  loadChildren:  () => import('./mod-task/mod-task.component').then(x => x.ModTaskComponent)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
