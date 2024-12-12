import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  description: string;
  color: string;
  expertise: number;
  iconColor: string;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent {
  
  activeSkill: string | null = null;

  skills: Skill[] = [
    {
      name: "Frontend Mastery",
      icon: "fas fa-code",
      iconColor: "text-blue-400",
      description: "Crafting pixel-perfect interfaces with Angular, React, and cutting-edge web technologies",
      color: "bg-blue-100",
      expertise: 95
    },
    {
      name: "AI & Machine Learning",
      icon: "fas fa-brain",
      iconColor: "text-purple-400",
      description: "Developing intelligent systems that learn, adapt, and transform complex data into insights",
      color: "bg-purple-100",
      expertise: 88
    },
    {
      name: "Cloud Architecture",
      icon: "fas fa-server",
      iconColor: "text-green-400",
      description: "Designing scalable, resilient cloud infrastructures that power global applications",
      color: "bg-green-100",
      expertise: 92
    },
    {
      name: "Creative Design",
      icon: "fas fa-palette",
      iconColor: "text-pink-400",
      description: "Blending aesthetics and functionality to create visually stunning digital experiences",
      color: "bg-pink-100",
      expertise: 85
    },
    {
      name: "Innovation Rocket",
      icon: "fas fa-rocket",
      iconColor: "text-orange-400",
      description: "Pioneering breakthrough solutions that push the boundaries of technological possibility",
      color: "bg-orange-100",
      expertise: 98
    },
    {
      name: "Data Engineering",
      icon: "fas fa-database",
      iconColor: "text-teal-400",
      description: "Transforming raw data into strategic assets through advanced analytics and processing",
      color: "bg-teal-100",
      expertise: 90
    }
  ];

  setActiveSkill(skillName: string): void {
    this.activeSkill = skillName;
  }

  clearActiveSkill(): void {
    this.activeSkill = null;
  }

  calculatePosition(index: number): { top: number, left: number } {
    const radius = 250;
    return {
      top: 50 + Math.sin(index * Math.PI / 3) * radius,
      left: 50 + Math.cos(index * Math.PI / 3) * radius
    };
  }

  getSkillClasses(skill: Skill): string {
    return `
      ${skill.color} 
      rounded-full 
      border-4 
      ${this.activeSkill === skill.name 
        ? 'border-white border-opacity-100' 
        : 'border-transparent'}
    `;
  }
}
