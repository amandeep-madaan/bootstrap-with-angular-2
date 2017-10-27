import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums:any;

  constructor(private http: Http) { }

  getAlbums():Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/albums")
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
    this.getAlbums().then(res=>{
      this.albums = res;
      //console.log(res);
    });
  }

}
