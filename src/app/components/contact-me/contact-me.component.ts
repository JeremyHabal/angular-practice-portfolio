import { Component } from '@angular/core';
import { LinkListenerService } from '../../link-listener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  linkSubscription: any;
  navItem: any;

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.navItem = this.linkService.activeNavItemSubject$;

    this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
      next: (newItem) => {
        this.navItem = newItem;
      },
    });

    // this.linkService.setNavItem(this.linkService.navItems[this.router.url]);
  }
}
