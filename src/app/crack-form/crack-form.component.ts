import { Component, OnInit, input, output } from '@angular/core';

@Component({
  selector: 'app-crack-form',
  standalone: true,
  imports: [],
  templateUrl: './crack-form.component.html',
  styleUrl: './crack-form.component.scss',
})
export class CrackFormComponent {
  photoURL: string = '../../assets/images/user.png';
  constructor() {}

  addPhoto(photoData: File): void {
    this.photoURL = URL.createObjectURL(photoData);
  }
}
