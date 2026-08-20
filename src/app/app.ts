import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared-module';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { About } from './user/components/about/about';
import { Services } from './user/components/services/services';
import { Gallery } from './user/components/gallery/gallery';
import { Reviews } from './user/components/reviews/reviews';
import { Contact } from './user/components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SharedModule,Header,Footer,About,Services,Gallery,Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HomeTech');
}
