import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  snowflakes: { left: number; delay: number; duration: number; size: number }[] = [];

  ngOnInit() {
    const numberOfFlakes = 50;
    for (let i = 0; i < numberOfFlakes; i++) {
      this.snowflakes.push({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 5,
        size: 1 + Math.random() * 1.5
      });
    }
  }
}
