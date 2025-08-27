import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  colors: string[] = ['#2c3e50','#e74c3c','#3498b','#9b59b6','#1abc9c','#f39c12']

  currentColorIndex: number = 0;
  changeNameColor(){
    this.currentColorIndex = (this.currentColorIndex = this.currentColorIndex + 1)
    % this.colors.length;
  }

  get currentColor(): string{
    return this.colors
    [this.currentColorIndex];
  }

  profile = {
    name: 'Christian Victori',
    title: 'Software Developer',
    about: 'Triceps Biceps',
    skills: ['Angular', 'Typescript', 'HTML/CSS', 'Resposive Design'],
    experience: [
      {role: 'Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Developing and maintaining web applicaitons using Angular and related technologies'},
      {
        role: 'Frontend Intern',
        company: 'Digital Creation',
        peroid: '2021 - 2022',
        description: 'Assited in building responsive user interafces and implementing new faetures'
      },
    ],
    education: {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Baguio',
      year: '2031',
    },
    contact: {
      email: '20171093@s.ubaguio.edu',
      phone: '+1 (555) 09182384652',
      location: 'Baguio City, Philippines'
    }
  }
}
