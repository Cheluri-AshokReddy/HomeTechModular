import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NzCardModule,SharedModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
