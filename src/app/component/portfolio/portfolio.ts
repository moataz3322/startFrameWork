import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  imageM: any;
  images: string[] = [
    '/poert1.png',
    '/port2.png',
    '/port3.png',
    '/poert1.png',
    '/port2.png',
    '/port3.png',
  ];
}
