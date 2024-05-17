import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';

const routes: Routes = [
  {
    path:'',redirectTo:'lists',pathMatch:'full'
  },
  {
    path:'new-task',component:NewTaskComponent
  },
  {
    path:'lists',component:TaskViewComponent
  },
  {
    path:'lists/:listId',component:TaskViewComponent
  },
  {
    path:'lists/:listId/update-task',component:UpdateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
