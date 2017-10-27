import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;

  constructor(private http: Http) { }

  getUsers():Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
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
    this.getUsers().then(res=>{
      this.users = res;
      console.log(res);
    });
  }

}
