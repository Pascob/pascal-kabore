import { Component, OnInit } from '@angular/core';

enum Menu{
  HOME,
  EXPERIENCES,
  PROJECTS,
  SKILLS,
  FORMATIONS
}
declare var particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeHome = true;
  activeSkill = false;
  activeExperience = false;
  activeProject = false;
  activeFormation = false;
  enumMenuLink = Menu;
  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particle.json', function() {
      console.log('callback - particles-js config loaded');
    });
  }

  activeLink(link: Menu): void {
    this.activeHome = false;
    this.activeSkill = false;
    this.activeExperience = false;
    this.activeProject = false;
    this.activeFormation = false;
    switch (link) {
      case Menu.HOME:
        this.activeHome = true;
        break;
      case Menu.EXPERIENCES:
        this.activeExperience = true;
        break;
      case Menu.FORMATIONS:
        this.activeFormation = true;
        break;
      case Menu.PROJECTS:
        this.activeProject = true;
        break;
      case Menu.SKILLS:
        this.activeSkill = true;
        break;
    }
  }
  toFrontUpperCase(name: string): string{
    return name.toUpperCase();
  }
}
