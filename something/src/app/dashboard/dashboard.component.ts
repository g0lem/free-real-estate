import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'app works!';
  items = [];
  new_item = {  };

  constructor(){

  	this.items = JSON.parse(window.localStorage.getItem('items'));

  }


  ngOnInit() {
  }

}
