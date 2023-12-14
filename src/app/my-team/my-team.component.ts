import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CardService } from '../services/card.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Student, Team } from '../dataClasses';
import { PopulateService } from '../populate.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MyTeamComponent implements AfterViewInit, OnInit {
  @Input() showKebabMenu: boolean = true;
  @Input() teamExist: boolean = true;

  constructor(
    private renderer: Renderer2,
    private auth: AuthService,
    private popul8: PopulateService
  ) {}

  cards: any[] = [];
  team!: Team;
  visibleCardCount = 6;
  params: any = {
    name: '',
    field: '',
    picture: '',
    about: '',
  };

  async ngOnInit(): Promise<void> {
    const currentUser = this.auth.getCurrentUser();
    if (currentUser !== null && currentUser !== undefined) {
      const student: Student = currentUser as Student;
      this.teamExist = student.team !== '' ? true : false;
      if (this.teamExist) {
        this.team = await this.popul8.retrieveTeam(student.id);
        this.cards = await this.popul8.retrieveStudentsTeam(student.team);
      }
      console.log(this.teamExist);
      console.log(student.team);
    } else {
      console.log('Null user');
    }
  }

  fileInput: HTMLInputElement | undefined;
  selectedImage: string | ArrayBuffer | null = null;
  name: any;
  engineeringTopics: string[] = [
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Chemical Engineering',
    'Aerospace Engineering',
    'Biomedical Engineering',
    'Computer Engineering',
    'Environmental Engineering',
    'Structural Engineering',
    'Geotechnical Engineering',
    'Transportation Engineering',
    'Materials Engineering',
    'Industrial Engineering',
    'Robotics and Automation',
    'Control Systems Engineering',
    'Renewable Energy Engineering',
    'Water Resources Engineering',
    'Nuclear Engineering',
    'Petroleum Engineering',
    'Mechatronics Engineering',
    'Mining Engineering',
    'Marine Engineering',
    'Acoustic Engineering',
    'Telecommunications Engineering',
    'Optical Engineering',
    'Systems Engineering',
    'Automotive Engineering',
    'Agricultural Engineering',
    'Thermal Engineering',
    'HVAC (Heating, Ventilation, and Air Conditioning)',
    'Biomechanical Engineering',
    'Manufacturing Engineering',
    'Cybersecurity Engineering',
    'Human Factors Engineering',
    'Software Engineering in Engineering Applications',
    'Sustainable Engineering',
    'Machine Learning and AI in Engineering',
    'Nanotechnology in Engineering',
    '3D Printing and Additive Manufacturing',
    'Sensor Technology',
    'Quantum Engineering',
    'Chemical Process Engineering',
    'Computational Engineering',
    'Industrial Design Engineering',
    'Earthquake Engineering',
    'Risk and Reliability Engineering',
    'Building Information Modeling (BIM)',
    'Augmented Reality/Virtual Reality in Engineering',
    'Ethical Engineering Practices',
    'Project Management in Engineering',
  ];

  ngAfterViewInit(): void {
    this.fileInput = this.renderer.selectRootElement('#imageInput');
    console.log(this.fileInput);
  }
  openFileInput(): void {
    if (this.fileInput) {
      this.fileInput.click();
    }
  }

  onImageSelected(event: any): void {
    if (event && event.target && event.target.files) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          if (e && e.target) {
            this.selectedImage = e.target.result as string;
          }
        };

        reader.readAsDataURL(file);
      }
    }
  }
  // create the new team
  onSubmit(): void {
    // prepare the data for writing
    this.params.picture = this.selectedImage;
    this.popul8.createMyTeam(
      this.params,
      this.auth.getCurrentUser() as Student
    );
  }
}
