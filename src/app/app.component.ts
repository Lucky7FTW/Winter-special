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
  snowflakes: {
    left: number;
    delay: number;
    duration: number;
    size: number;
    rotateDuration: number;
    opacity: number;
    char: string;
  }[] = [];

  ngOnInit() {
    const numberOfFlakes = 200; // Increase number for denser snowfall
    const chars = ['❄', '❅', '❆']; // Variety of snowflake chars

    for (let i = 0; i < numberOfFlakes; i++) {
      this.snowflakes.push({
        left: Math.random() * 100,             // Horizontal start (0-100%)
        delay: Math.random() * 5,              // Start delay (0-5s)
        duration: 8 + Math.random() * 5,       // Fall duration (8-13s)
        size: 1 + Math.random() * 1.5,         // Size in em (1-2.5em)
        rotateDuration: 10 + Math.random() * 10, // Rotation speed (10-20s per full rotation)
        opacity: 0.5 + Math.random() * 0.5,    // Opacity (0.5 - 1)
        char: chars[Math.floor(Math.random() * chars.length)] // Random snowflake char
      });
    }
  }
}
