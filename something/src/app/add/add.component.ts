import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  items = [];
  new_item = {  };


  constructor() {   

  		this.items = JSON.parse(window.localStorage.getItem('items'));

  }

  ngOnInit() {
  }

  pushItem(){

  	this.items.push(this.new_item);
  	this.new_item = {};
  	window.localStorage.setItem('items', JSON.stringify(this.items));
  	console.log(window.localStorage.getItem('items'));
  	
  }
}
