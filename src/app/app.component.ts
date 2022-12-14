import { Component } from '@angular/core';
import { LinkListenerService } from './link-listener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems: any;
  navItemsArray: any;
  themeName: string;

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.navItems = this.linkService.navItems;
    this.navItemsArray = [];
    Object.keys(this.navItems).forEach((key) => {
      this.navItemsArray.push(this.navItems[key]);
    });
    this.themeName = 'jrTheme';
  }

  linkClick(item: any) {
    this.router.navigate([item['link']]);
    this.linkService.setNavItem(item);
  }

  changeTheme() {
    this.themeName = 'cupcake';
  }
}
