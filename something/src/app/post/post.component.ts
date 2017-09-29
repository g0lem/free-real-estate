import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  item;

  constructor(private activatedRoute: ActivatedRoute) { 

  	this.activatedRoute.params.subscribe(function(params: Params){
        let id = params['id'];
        console.log(id);
        this.item = JSON.parse(window.localStorage.getItem('items'))[id];
        console.log(this.item);
    });


  }

  ngOnInit() {
  }

}
