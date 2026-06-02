import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./layout/nav-bar/nav-bar";
import { HeroSection } from "./feature/hero-section/hero-section";
import { AboutMe } from "./feature/about-me/about-me";
import { Skill } from "./feature/skill/skill";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, HeroSection, AboutMe, Skill],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
