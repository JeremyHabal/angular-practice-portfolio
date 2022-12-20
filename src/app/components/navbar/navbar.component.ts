import { Component } from '@angular/core';
import { LinkListenerService } from '../../link-listener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navItems: any;
  navItemsArray: any;

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.navItems = this.linkService.navItems;
    this.navItemsArray = [];
    Object.keys(this.navItems).forEach((key) => {
      this.navItemsArray.push(this.navItems[key]);
    });
  }

  linkClick(item: any) {
    // this.router.navigate([item['link']]);
    // this.linkService.setNavItem(item);
  }
}
