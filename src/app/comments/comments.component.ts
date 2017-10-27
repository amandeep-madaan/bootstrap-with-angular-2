import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:any;

  constructor(private http: Http) { }

  getComments():Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
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
    this.getComments().then(res=>{
      this.comments = res;
      //console.log(res);
    });
  }

}
