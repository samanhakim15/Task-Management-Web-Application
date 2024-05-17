import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {}

  listId: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
    });
  }

  updateTask(title: string): void {
    this.taskService.updateTask(this.listId, title).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
      console.log('Task updated:', title);
    }, (error: any) => {
      console.error('Error updating task:', error);
    });
    this.router.navigate(['/'])
  }
}
