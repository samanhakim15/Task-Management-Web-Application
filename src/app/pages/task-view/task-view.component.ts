import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  lists: any;
  selectedListId: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });
    this.loadLists(); // Load lists on component initialization
  }

  loadLists() {
    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;
    });
  }

  ondeleteTask(listId: string) {
    this.taskService.deleteList(listId).subscribe(() => {
      this.lists = this.lists.filter((list: any) => list.id !== listId);
      console.log(listId);
    });

  }
}
