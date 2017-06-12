import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activePage='Recipes';
  onPageChanged(page){
    console.log(page)
    this.activePage=page;
  }
}
