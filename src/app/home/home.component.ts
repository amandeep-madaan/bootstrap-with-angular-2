import { Component, OnInit } from '@angular/core';
//import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //currentChoice: string = "home";

  constructor(/*routerLinkActive="active"*/) { }

  /*setActive(choice: string): void{
    this.currentChoice = choice;
  }

  getActive(choice: string) : string{
    if(this.currentChoice == choice)
        return "active";
    else
        return "not";
  }*/

  ngOnInit() {
  }

}
