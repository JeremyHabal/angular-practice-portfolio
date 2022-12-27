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
  interests: any;
  selectedAboutList: 'frontend' | 'backend' | 'general' | 'creative';

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.navItem = {
      name: '',
      link: '',
      icon: '',
    };
    this.interests = [
      {
        name: 'Technology',
        icon: './assets/icon/technology.svg',
      },
      {
        name: 'Digital Art & Design',
        icon: './assets/icon/brush.svg',
      },
      {
        name: 'Going to the gym',
        icon: './assets/icon/gym.svg',
      },
      {
        name: 'World History and Geography',
        icon: './assets/icon/earth.svg',
      },
      {
        name: 'Video Games',
        icon: './assets/icon/game.svg',
      },
      {
        name: 'Animals (especially cats)',
        icon: './assets/icon/cat.svg',
      },
    ];

    this.selectedAboutList = 'frontend';

    this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
      next: (newItem) => {
        this.navItem = newItem;
      },
    });

    // this.linkService.setNavItem(this.linkService.navItems[this.router.url]);
  }

  changeAboutList(type: 'frontend' | 'backend' | 'general' | 'creative'): void {
    this.selectedAboutList = type;
  }
}
