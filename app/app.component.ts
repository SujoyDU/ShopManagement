import { Component } from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {TabComponent} from './tab/tab.component';

@Component({
  selector: 'my-app',
  template: `

    <h1>Shop Management</h1>
    <h2>Shop Name</h2>
    <p> Here you can see all the details</p>
    <tabs></tabs>
    <div class="middle"></div>
    <footer></footer>
   `,
  directives:[FooterComponent,TabComponent]


})
export class AppComponent { }