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
        description: 'An e-commerce website',
        tags: ['Java', 'Bootstrap', 'Adobe XD'],
        image: './assets/img/works/Seoul-Soul.jpg',
        link: '',
        github: 'https://github.com/jeremyhabal/angular-practice-portfolio.git',
      },
      {
        name: 'WarpZone',
        category: 'Web Development & UI Design',
        description: 'An e-commerce website',
        tags: ['MySQL', 'Bootstrap'],
        image: './assets/img/works/WarpZone.jpg',
        link: '',
        github: '',
      },
      {
        name: 'Surveyor',
        category: 'App Development & UI Design',
        description: 'A capstone project',
        tags: ['React', 'Tailwind'],
        image: './assets/img/works/Surveyor.jpg',
        link: '',
        github: '',
      },
    ];
  }
}
