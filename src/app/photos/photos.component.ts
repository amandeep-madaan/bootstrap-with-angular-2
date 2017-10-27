import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:any;

  constructor(private http: Http) { }

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
    this.getPhotos().then(res=>{
      this.photos = res;
      //console.log(res);
    });
  }

}
