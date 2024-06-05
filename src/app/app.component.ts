import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from './posts';
import { DataService } from './service/data.service';
import { NgFor } from '@angular/common';

// after creating the dataservice.ts file, come here
// 1. create a lifecycle method ngOnInit
// 2. create a constructor to inject the dataservice
// 3. create a variable post with is an instance of the Obsevable Post[]
// 4. Consume the api inside the lifecycle method
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-provideHttpClient';
  posts: Post[] =[]
  errorMessage!: string

  constructor(private data_service:DataService){}

  ngOnInit(){
    this.data_service.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts
        console.log(posts)
      },
      error: (error) => {
        this.errorMessage = error
      }
    })
  }
}

// NOTES:
// AppComponent: a component that fetches a list of posts from a data service and displays them in the component
// 1. posts:  is an array of Post[] that wil hold the fetched posts
// 2. errorMessage: string that will hold any error messages that occur during the data fetch
// 3. constructor: injects the DataService into the component
// 4. ngOnInit(): a lifecycle hook that is called after the component's constructor and before the component's HTML is rendered. Here its used to fetch the posts from the data service.
// 5. subscribe(): used to subscribe to the observable returned by getAllPosts from the DataService. It takes an objec with two properties: next & error
// 6. next: is a callback function that is called when the observable emits a value. In this case, it updates the 'posts' array with the fetched posts and logs them to the console.
// 7. error: is a callback function that us aclled when an error occurs during the data fetch.


