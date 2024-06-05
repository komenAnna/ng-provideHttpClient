import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// Configure providehttpClient
// 1. Import the module
// 2. Craete a provider object inside the below function
// 3. In array add provideHttpClient module
bootstrapApplication(AppComponent, {providers:[provideHttpClient()]})
  .catch((err) => console.error(err));

// NOTES:
// 1. The boostrapApplication() method is used to bootstrap an Anngular app with a specific root component and optional providers as arguments and returns a promise that resolves with the bootstarpped app.
// 2. AppComponent: the root component of any Angular app. Serves as the entry point for your app and is responsible for rendering the initial view.
// 3. Providers(optional): are used to configure dependencies and services that should be available throughout the app.
// 4. {providers:[provideHttpClient]}: an object that contains the providers for the app.
// 5. provideHttpClient: a function that returns a provider for the Http client service, this is a built in A gular service that provides a simple way to make Http requests.
// 6. .catch((err=>console.error(err))): an error handling block using the promise's catch method. Executes if an error occurs during the bootstrapping process.



