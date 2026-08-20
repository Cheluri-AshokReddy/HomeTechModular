import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {

  categories = [
    'Kitchen',
    'BedRoom',
    'LivingRoom',
    'PoojaUnit',
    'StudyWorkspace',
    'Panelling',
    'Falseceiling'
  ];

  selectedCategory = 'Kitchen';

  images: string[] = [];

  constructor() {
    this.loadImages('Kitchen');
  }

  loadImages(category: string) {
    this.selectedCategory = category;   

    this.images = [];

    for (let i = 1; i <= 5; i++) {
      this.images.push(
        `assets/Images/Gallery/${category}/${category}${i}.jpg`
      );
    }
  }
}
