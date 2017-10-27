import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  posts: any;
  photos: any;

  constructor(private http: Http) { }

  getPosts():Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
        .toPromise()
        .then(response =>
          response.json() as any)
        .catch(this.handleError);
  }

  getToDos():Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
        .toPromise()
        .then(response =>
          response.json() as any)
        .catch(this.handleError);
  }

  getComments():Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
        .toPromise()
        .then(response =>
          response.json() as any)
        .catch(this.handleError);
  }

  getPhotos():Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
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
    //console.log(this.title);
    this.getPosts().then(res=>{
      this.posts = res;       
      //console.log(this.posts);
    });

     this.getToDos().then(res=>{
      console.log(res);
    });
  }

}