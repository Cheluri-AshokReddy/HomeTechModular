import { Component } from '@angular/core';
import { SharedModule } from '../shared-module';

@Component({
  selector: 'app-header',
  imports: [SharedModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  slides = [
    {
      image: 'assets/Images/HeaderImages/h1.jpg',
      title: 'Luxury Modular Interiors',
      subtitle: 'Transforming Your Dream Home',
      button: 'Book Free Consultation'
    },

    {
      image: 'assets/Images/HeaderImages/h2.jpg',
      title: 'Modern Kitchen Designs',
      subtitle: 'Crafted With Perfection',
      button: 'Get Free Quote'
    },

    {
      image: 'assets/Images/HeaderImages/h3.jpg',
      title: 'Elegant Bedroom Interiors',
      subtitle: 'Designed For Comfort',
      button: 'Explore Designs'
    },

    {
      image: 'assets/Images/HeaderImages/h4.jpg',
      title: 'Complete Home Interiors',
      subtitle: 'Beautiful Spaces. Better Living.',
      button: 'Contact Us'
    }
  ];


}
