import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  items = [];
  id;
  new_item = {};

  constructor(private route: ActivatedRoute) { 

  	this.items = JSON.parse(window.localStorage.getItem('items'));



    this.id = this.route.snapshot.params['id'];



  }

  ngOnInit() {
  }

  edit(){

  		console.log(this.items);
  		this.items[this.id] = this.new_item;

  		window.localStorage.setItem('items', JSON.stringify(this.items));

  		console.log(JSON.parse(window.localStorage.getItem('items')));


  }

}
