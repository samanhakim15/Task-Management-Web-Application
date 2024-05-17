import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { HttpClient} from '@angular/common/http';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
