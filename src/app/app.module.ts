import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticationComponent } from './autentication/autentication.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DelTaskComponent } from './del-task/del-task.component';
import { ModTaskComponent } from './mod-task/mod-task.component';
import { ListTaskComponent } from './list-task/list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AutenticationComponent,
    AddTaskComponent,
    DelTaskComponent,
    ModTaskComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
