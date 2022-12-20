import { Component } from '@angular/core';
import { LinkListenerService } from './link-listener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  themeName: string;

  constructor() {
    this.themeName = 'jrTheme';
  }

  changeTheme() {
    this.themeName = 'cupcake';
  }
}
