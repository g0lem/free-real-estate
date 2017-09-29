import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items = [];
  new_item = {  };

  constructor(){

  	this.items = JSON.parse(window.localStorage.getItem('items'));
    console.log(this.items);

  }


  pushItem(){
    this.items = JSON.parse(window.localStorage.getItem('items'));
  	this.items.push(this.new_item);
  	this.new_item = {};
  	window.localStorage.setItem('items', JSON.stringify(this.items));
  	console.log(window.localStorage.getItem('items'));
  	
  }
}
