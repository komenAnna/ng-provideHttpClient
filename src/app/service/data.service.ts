import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../posts';
import { Observable } from 'rxjs';

// With the provideHttpClient configured, we can now use this file to consume API and make http requests
// we are using the jsonplaceholder API ro access placeholder data
// 1. Specify the URL in a variable (not best practice)
// 2. import HttpClient and inject it in constructor
// 3. Create the get data function 
// 4. Import the Post interface
// 5. Call the interface in the getAllPosts()
// 6. Make it an Observable of type Post[]
// 7. Also make the http.get of type Post[]

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiURL)
  }
}

// NOTES:
// DataService: This is a service class that provides data to the app
// 1. @Injectable: a decorator that marks a class as an injectable service. This allows the service to be injected into other components/servies.
// 2. providedIn: 'root': specifies that the service should be provided at the root level of the app. Meaning that the service will be created once and shared across the entire app.
// 3. apiURL: a string that holds the URL of the API from which the data will be fetched.
// 4. constructor(): used to inject depndencies into the service/component. Here, it injects an instance of HttpClient which is a built in Angular service used to make Http Requests.
// 5. getAllPosts(): fetches all posts from the API endpoint. When called, it uses the HttpClient to make a GET request to the apiURL. The response is returned as an observable of type Post[]
// 6. The observable can be subscribed to in a component or another service to fetch the data.


