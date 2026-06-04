import { Component, signal } from '@angular/core';
import { NavBar } from "./layout/nav-bar/nav-bar";
import { HeroSection } from "./feature/hero-section/hero-section";
import { AboutMe } from "./feature/about-me/about-me";
import { Skill } from "./feature/skill/skill";
import { ContactMe } from "./feature/contact-me/contact-me";
import {  FooterComponent } from "./feature/footer/footer";

@Component({
  selector: 'app-root',
  imports: [NavBar, HeroSection, AboutMe, Skill, ContactMe,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
