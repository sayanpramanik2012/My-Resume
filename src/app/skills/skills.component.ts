import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  selectedSkill: string | null = null;
  skills!: any[];
  skillDetails: { [key: string]: string } = {};
  programmingSkills!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/skills.json').subscribe((data) => {
      this.skills = data;
      this.skills.forEach((skill) => {
        this.skillDetails[skill.name] = skill.details;
      });
    });
    this.http.get<any[]>('assets/programming-skills.json').subscribe((data) => {
      this.programmingSkills = data;
    });
  }

  showSkillDetails(skill: string) {
    this.selectedSkill = skill;
  }

  closeSkillDetails() {
    this.selectedSkill = null;
  }
}
