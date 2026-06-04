import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

  navLinks = [
    'Home',
    'About',
    'Skills',
    'Contact'
  ];

  contact = {
    email: 'Alpha112534@gmail.com',
    phone: '+20 1150527522',
    location: 'Cairo, Egypt'
  };

  socials = [
    {
      label: 'GitHub',
      icon: 'ti-brand-github',
      href: 'https://github.com/'
    },
    {
      label: 'LinkedIn',
      icon: 'ti-brand-linkedin',
      href: 'https://www.linkedin.com/in/youssef-yasser-b96a432b1?utm_source=share_via&utm_content=profile&utm_medium=member_android'
    },
    {
      label: 'Email',
      icon: 'ti-mail',
      href: 'mailto:Alpha112534@gmail.com'
    }
  ];
}