import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me-hobbies-skills',
  templateUrl: './about-me-hobbies-skills.component.html',
  styleUrls: ['./about-me-hobbies-skills.component.scss'],
})
export class AboutMeHobbiesSkillsComponent {
  @Input() selectedList: 'hobbies' | 'skills';
  hobbies: string[];
  skills: string[];

  constructor() {
    this.selectedList = 'hobbies';
    this.hobbies = ['Drawing', 'Gaming', 'Exercising', 'Napping'];
    this.skills = ['Programming', 'Designing', 'Drawing', 'Example'];
  }
}
