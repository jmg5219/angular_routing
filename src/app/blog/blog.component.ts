import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit, OnDestroy {
  //We are getting our blog posts through the data service
  blogPosts: any = [];
  subscription!: Subscription;

  constructor(private data: DataService) {}

  //Subscribe to the service to share data globally
  ngOnInit(): void {
    this.subscription = this.data.currentData.subscribe(
      (myData) => (this.blogPosts = myData)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
