import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me-hobbies-skills',
  templateUrl: './about-me-hobbies-skills.component.html',
  styleUrls: ['./about-me-hobbies-skills.component.scss'],
})
export class AboutMeHobbiesSkillsComponent {
  @Input() selectedList: 'frontend' | 'backend' | 'general' | 'creative';
  frontend: string[];
  backend: string[];
  general: string[];
  creative: string[];

  constructor() {
    this.selectedList = 'frontend';
    this.frontend = [
      'JS',
      'TypeScript',
      'React',
      'Angular',
      'Tailwind',
      'Bootstrap',
      'HTML5',
      'CSS3',
    ];
    this.backend = ['Java', 'C++', 'MySQL'];
    this.general = ['Git', 'GitHub', 'VsCode', 'BitBucket', 'NodeJS'];
    this.creative = [
      'Adobe Photoshop',
      'Adobe XD',
      'Adobe InDesign',
      'Adobe Illustrator',
      'Autodesk Maya',
    ];
  }
}
