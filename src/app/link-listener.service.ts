import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinkListenerService {
  activeNavItemSubject$: Subject<string>;
  activeItem: number;
  navItems: any;

  constructor() {
    this.activeNavItemSubject$ = new Subject();
    this.navItems = {
      '/about-me': {
        name: 'About Me',
        link: '/about-me',
        icon: '',
        id: 'about-me',
      },
      '/works': {
        name: 'Works',
        link: '/',
        icon: '',
        id: 'works',
      },
      '/contact-me': {
        name: 'Contact Me',
        link: '/contact-me',
        icon: '',
        id: 'contact-me',
      },
    };
    this.activeItem = 0;
  }

  setNavItem(newItem: any) {
    console.log(newItem);
    this.activeNavItemSubject$.next(newItem);
  }
}
