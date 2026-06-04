import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
})
export class ContactMe {

  form: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  sending = false;
  sent = false;

  contactInfo = [
    {
      icon: 'email',
      label: 'EMAIL',
      value: 'Alpha112534@gmail.com',
      href: 'Alpha112534@gmail.com'
    },
    {
      icon: 'phone',
      label: 'PHONE NO.',
      value: '01150527522',
      href: 'tel:01150527522'
    },
    {
      icon: 'linkedin',
      label: 'LINKEDIN',
      value: 'in/Youssef Yasser',
      href: 'https://www.linkedin.com/in/youssef-yasser-b96a432b1?utm_source=share_via&utm_content=profile&utm_medium=member_android'
    }
  ];

  async sendMessage() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      return;
    }

    this.sending = true;

    await new Promise(resolve => setTimeout(resolve, 1500));

    this.sending = false;
    this.sent = true;

    this.form = {
      name: '',
      email: '',
      message: ''
    };

    setTimeout(() => {
      this.sent = false;
    }, 3000);
  }
}