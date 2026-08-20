import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {}
