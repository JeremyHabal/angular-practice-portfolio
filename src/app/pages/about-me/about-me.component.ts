import { Component } from '@angular/core';
import { LinkListenerService } from '../../link-listener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  linkSubscription: any;
  navItem: any;
  selectedAboutList: 'hobbies' | 'skills';

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.navItem = {
      name: '',
      link: '',
      icon: '',
    };
    this.selectedAboutList = 'hobbies';

    this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
      next: (newItem) => {
        this.navItem = newItem;
      },
    });

    this.linkService.setNavItem(this.linkService.navItems[this.router.url]);
  }

  changeAboutList(type: 'hobbies' | 'skills'): void {
    this.selectedAboutList = type;
  }
}
