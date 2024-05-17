import { Injectable } from '@angular/core';
import { WebRequestService } from "./web-request.service";
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3600';

  constructor(private webReqService: WebRequestService,private http: HttpClient) {}

 createList(List_name:string){
  // we want to send a web request to create a list
  return this.webReqService.post('lists',{List_name});
 }
 getLists(){
  return this.webReqService.get('lists');
}
deleteList(listId: any) {
  return this.webReqService.delete(`lists/${listId}`);
}

updateTask(listId: any, title: any) {
  return this.http.patch(`${this.baseUrl}/lists/${listId}`, { List_name: title });
}
}
