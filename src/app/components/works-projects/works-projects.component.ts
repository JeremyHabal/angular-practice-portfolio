import { Component } from '@angular/core';

@Component({
  selector: 'app-works-projects',
  templateUrl: './works-projects.component.html',
  styleUrls: ['./works-projects.component.scss'],
})
export class WorksProjectsComponent {
  worksProjects: any;
  worksProjectsArray: any;

  constructor() {
    this.worksProjects = [
      {
        name: 'Seoul-Soul',
        category: 'Web Development & UI Design',
        description:
          'An e-commerce website that sells K-pop merchandise. I worked on the design and coded the front-end of the website. I went with pastel colors to emulate a friendly and welcoming vibe to the website.',
        tags: ['Java', 'Bootstrap', 'Adobe XD'],
        image: './assets/img/works/Seoul-Soul.jpg',
        github: 'https://github.com/jeremyhabal/angular-practice-portfolio.git',
      },
      {
        name: 'WarpZone',
        category: 'Web Development & UI Design',
        description:
          'An e-commerce website that sells video games. I designed and worked on the front-end and back-end. Went with a dark-mode and red-accented "gamer" aesthetic . Implemented the basic functions for an e-commerce website.',
        tags: ['MySQL', 'Bootstrap'],
        image: './assets/img/works/WarpZone.jpg',
        github: '',
      },
      {
        name: 'Surveyor',
        category: 'App Development & UI Design',
        description:
          'A capstone project about developing a JavaScript Package that aims to improve a website\'s user navigability by allowing the user to record the "ideal" way to navigate the site and also record website tester performance. I worked on conceptualizing the package and its UI Design.',
        tags: ['React', 'Tailwind'],
        image: './assets/img/works/Surveyor.jpg',
        github: '',
      },
      {
        name: 'Conclave',
        category: 'Concept UI Design',
        description:
          'Conclave is a concept live conference application intended for class settings, business meetings, get-togethers, etc. It aims to answer the problems of most conference applications, in order to create the best, most convenient conference app that is loaded with features. I worked on the concept design of the application.',
        tags: ['Adobe XD'],
        image: './assets/img/works/Conclave.jpg',
        github: '',
      },
      {
        name: 'Understanding Brain Drain',
        category: 'Magazine Design',
        description:
          "A magazine that informs its readers about brain drain and my team's stand about it. I worked here as the magazine designer and the proofreader.",
        tags: ['Adobe Photoshop', 'Adobe InDesign'],
        image: './assets/img/works/UnderstandingBrainDrain.jpg',
        github: '',
      },
      {
        name: 'Psyche',
        category: 'Mobile App Development & UI Design',
        description:
          'Designed and developed a mobile application that helps its users with their relaxation needs. It can play ambient noise and has stories and relaxation guides for the user to read.',
        tags: ['MIT App Inventor', 'Adobe Photoshop', 'Adobe XD'],
        image: './assets/img/works/Psyche.jpg',
        github: '',
      },
    ];
  }
}
