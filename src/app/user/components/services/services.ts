import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {


  services = [

    {
      title: 'Kitchen Design',
      icon: 'assets/Images/ServicesIcons/kitchen.png',
      description: 'Maximize functionality and aesthetics with our modular kitchen solutions.'
    },

    {
      title: 'Wardrobe Design',
      icon: 'assets/Images/ServicesIcons/wardrobe.png',
      description: 'Create a relaxing, comfortable bedroom tailored to your style and needs.'
    },

    {
      title: 'TV Units',
      icon: 'assets/Images/ServicesIcons/tv-table.png',
      description: 'Modern and stylish TV units that complement your living space.'
    },

    {
      title: 'Crockery Units',
      icon: 'assets/Images/ServicesIcons/Crockery.png',
      description: 'Beautifully designed crockery units for a stylish and organized dining area.'
    },

    {
      title: 'Bathroom Design',
      icon: 'assets/Images/ServicesIcons/vanity.png',
      description: 'Modern and space-saving bathroom solutions with a focus on comfort.'
    },

    {
      title: 'Study Table',
      icon: 'assets/Images/ServicesIcons/workspace.png',
      description: 'Ergonomic and space-efficient study tables, designed for comfort and productivity.'
    },

    {
      title: 'False Ceiling',
      icon: 'assets/Images/ServicesIcons/ceiling.png',
      description: 'Stylish and functional false ceilings that add elegance and integrated lighting.'
    },

    {
      title: 'Lights',
      icon: 'assets/Images/ServicesIcons/light.png',
      description: 'Comprehensive lighting solutions, from ambient to task lighting.'
    },

    {
      title: 'Wall Paint',
      icon: 'assets/Images/ServicesIcons/paint-roller.png',
      description: 'Enhance your home’s ambiance with premium wall paints in a variety of finishes.'
    },

    {
      title: 'Pooja Unit',
      icon: 'assets/Images/ServicesIcons/PoojaRoom.png',
      description: 'Beautiful, compact pooja units that bring a sacred and serene space.'
    }

  ];


}
