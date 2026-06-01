import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavBar } from "../../layout/nav-bar/nav-bar";

@Component({
  selector: 'app-hero-section',
  imports: [NavBar],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroSection {}
