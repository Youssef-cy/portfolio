import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./layout/nav-bar/nav-bar";
import { HeroSection } from "./feature/hero-section/hero-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
