import { SelectCountryComponent } from './../select-country/select-country.component';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrackInterface } from '../crack-interface';
import { CommonModule } from '@angular/common';
import { CrackInfoService } from '../services/crack-info.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crack-form',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    SelectCountryComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './crack-form.component.html',
  styleUrls: ['./crack-form.component.scss'],
})
export class CrackFormComponent {
  photoURL: string = '';
  isDefault: boolean = true;
  crackData: CrackInterface = {
    nom: "",
    email: "",
    dateNaissance: "",
    sexe: "",
    nationalite: "",
    telephone: "",
    specialite: {
      developpement: false,
      ia: false,
      rit: false,
      dataScience: false,
    },
    niveauEtude: "",
    motivation: "",
    niveauAnglais: 0,
    photo: null
  };

  constructor(private crackService: CrackInfoService) {
    this.photoURL = '../../assets/images/user.png';
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    const formData = new FormData();

    // Ajoutez les données de crackData à FormData
    for (const key in this.crackData) {
      if (this.crackData.hasOwnProperty(key) && key !== 'photo') {
        const value = this.crackData[key];

        // Gérer le champ spécialité (qui est un objet)
        if (key === 'specialite') {
          for (const subKey in value) {
            if (value.hasOwnProperty(subKey)) {
              formData.append(`${key}[${subKey}]`, value[subKey]);
            }
          }
        } else {
          formData.append(key, value);
        }
      }
    }

    // Ajoutez le fichier photo à FormData
    if (this.crackData.photo) {
      formData.append('photo', this.crackData.photo, this.crackData.photo.name);
    }

    // Envoyez la requête HTTP POST avec le FormData
    this.crackService.postCrackData(formData).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: HttpErrorResponse | any) => {
        console.error("error:", err.message);
      },
      complete: () => {
        console.log("Fin de l'opération...");
      },
    });
  }

  // Méthode pour supprimer la photo
  removePhoto() {
    this.photoURL = '../../assets/images/user.png';
    this.crackData.photo = null;
    this.isDefault = true;
  }

  // Méthode pour ajouter une photo
  addPhoto(photoData: File): void {
    this.isDefault = false;
    this.photoURL = URL.createObjectURL(photoData);
    this.crackData.photo = photoData;
  }
}
