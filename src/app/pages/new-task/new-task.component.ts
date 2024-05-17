import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit{

  constructor(private taskService:TaskService ,
    private rout:Router
  ){}
  ngOnInit() {
  }

  createList(List_name:string){
    this.taskService.createList(List_name).subscribe((response:any)=>{
      console.log(response);
      // now we navigate to /lists/response._id
  })
  this.rout.navigate(['/'])
  }
}
