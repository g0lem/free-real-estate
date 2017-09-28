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


  pushItem(){

  	this.items.push(this.new_item);
  	this.new_item = {};
  	window.localStorage.setItem('items', JSON.stringify(this.items));
  	console.log(window.localStorage.getItem('items'));
  	
  }
  ngOnInit() {
  }

}
