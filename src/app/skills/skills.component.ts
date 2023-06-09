import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  selectedSkill: string | null = null;

  skillDetails: { [key: string]: string } = {
    html: 'Details about HTML',
    css: 'Details about CSS',
    ts: 'Details about TypeScript',
    'c++': 'Details about C++',
    python: 'Details about Python',
    c: 'Details about C',
    angular: 'Details about Angular',
  };

  showSkillDetails(skill: string) {
    this.selectedSkill = skill;
  }

  closeSkillDetails() {
    this.selectedSkill = null;
  }
}
