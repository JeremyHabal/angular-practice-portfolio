import { Component } from '@angular/core';
import { LinkListenerService } from 'src/app/link-listener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent {
  linkSubscription: any;
  navItem: any;
  bannerClass: string;

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.navItem = this.linkService.activeNavItemSubject$;
    this.bannerClass = '';
    this.changeBannerClass();

    this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
      next: (newItem) => {
        this.navItem = newItem;
        this.changeBannerClass();
      },
    });
  }

  changeBannerClass(): void {
    if (this.router.url === '/') {
      this.bannerClass = 'home';
    } else {
      this.bannerClass = String(this.navItem['link']).replace('/', '');
    }
  }
}
