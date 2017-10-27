import { Component } from '@angular/core';
import { DemoNumberPipe } from './demo-number.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count: number;

  posts: any[] = [{
    title: 'Post 1',
    description: 'Post 1 Description'
  },
  {
    title: 'Post 2',
    description: 'Post 2 Description'
  },
  {
    title: 'Post 3',
    description: 'Post 3 Description'
  },
  {
    title: 'Post 4',
    description: 'Post 4 Description'
  }      
  ];
}
