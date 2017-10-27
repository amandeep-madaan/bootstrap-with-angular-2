import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:any;

  constructor(private http: Http) { }

  getTodos():Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
        .toPromise()
        .then(response =>
          response.json() as any)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

  ngOnInit() {
    this.getTodos().then(res=>{
      this.todos = res;
      //console.log(res);
    });
  }

}
