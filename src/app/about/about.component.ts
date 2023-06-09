import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  slides!: any[];
  currentIndex = 0;
  languages!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/languages.json').subscribe((data) => {
      this.languages = data;
    });
    this.http.get<any[]>('assets/achiv.json').subscribe((data) => {
      this.slides = data;
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  calculateProgress() {
    const slideCount = this.slides.length;
    const progress = ((this.currentIndex + 1) / slideCount) * 100 + '%';
    return progress;
  }
}
