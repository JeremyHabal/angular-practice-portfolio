import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinkListenerService {
  activeNavItemSubject$: Subject<string>;
  navItems: any;

  constructor() {
    this.activeNavItemSubject$ = new Subject();
    this.navItems = {
      '/': {
        name: 'Home',
        link: '/',
        icon: '',
      },
      '/about-me': {
        name: 'About Me',
        link: '/about-me',
        icon: '',
      },
      '/contact-us': {
        name: 'Contact Us',
        link: '/contact-us',
        icon: '',
      },
    };
  }

  setNavItem(newItem: any) {
    console.log(newItem);
    this.activeNavItemSubject$.next(newItem);
  }
}
