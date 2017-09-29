import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  items = [];
  id;
  item = {};

  constructor(private route: ActivatedRoute) { 

  	this.items = JSON.parse(window.localStorage.getItem('items'));



    this.id = this.route.snapshot.params['id'];

    this.item = this.items[this.id];



  }

  ngOnInit() {
  }

}
