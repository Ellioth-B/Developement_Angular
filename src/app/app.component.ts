import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';

  // isTheFirstElement : boolean = true;

  displayMovies : boolean = true; // true fait apparaitre la liste dans app.html, et false la fait disparaitre
}
