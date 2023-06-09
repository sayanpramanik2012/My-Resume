import { Component } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My-Resume';
  isLoading: boolean = false;
  showAbout: boolean = true;

  constructor() {
    // Simulating loading for 1 second on component initialization
    this.isLoading = true;
    interval(1000).subscribe(() => {
      this.isLoading = false;
    });
  }
}
