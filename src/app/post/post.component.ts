import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; //to get id from url
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  id: any;

  //We are getting our blog posts through the data service
  blogPosts: any = [];
  subscription!: Subscription;
  blogPost: any;

  //inject instance of activated route
  constructor(private route: ActivatedRoute, private data: DataService) {}

  //track the id param
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = this.route.snapshot.paramMap.get('id');
    });
    //subscribe to data service
    this.subscription = this.data.currentData.subscribe(
      (myData) => (this.blogPosts = myData)
    );

    this.blogPost = this.blogPosts[this.id];
    console.log('id is: ', this.id, 'Blog post is: ', this.blogPost);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
