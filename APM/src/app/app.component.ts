import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div>The First Component</div>
    </div>
    <br />
    <pm-products></pm-products>
    `
})
export class AppComponent {
  pageTitle: string = 'BorpCo Product Management';
  myName: string = ''
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title: string = 'Angular: Getting Started';
// }
