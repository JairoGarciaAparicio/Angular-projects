import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelTaskComponent } from './del-task.component';

const routes: Routes = [{
  path: '',
  component: DelTaskComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelTaskRoutingModule { }
