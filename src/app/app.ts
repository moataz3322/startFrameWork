import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './component/home/home';
import { Navbar } from './component/navbar/navbar';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';
import { Portfolio } from './component/portfolio/portfolio';
import { Footer } from './component/footer/footer';
import { StartFramework } from './component/start-framework/start-framework';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Home,
    Navbar,
    About,
    Contact,
    Portfolio,
    Footer,
    StartFramework,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'startFrameWork';
}
