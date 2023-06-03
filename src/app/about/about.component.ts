import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  achievements = [
    {
      title: 'Achievement 1',
      description: 'Description of Achievement 1',
    },
    {
      title: 'Achievement 2',
      description: 'Description of Achievement 2',
    },
    // Add more achievements as needed
  ];
}
