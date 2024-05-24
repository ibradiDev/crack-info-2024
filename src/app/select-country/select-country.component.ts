import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-country',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select-country.component.html',
  styleUrl: './select-country.component.scss'
})



export class SelectCountryComponent {
  @Input()
  selectedCountry!: string; // Recevoir la valeur crackData.nantionalite
  @Output() selectedCountryChange = new EventEmitter<string>(); // Émettre les changements
  constructor() { }

  // Méthode appelée lorsqu'il y a un changement de sélection
  onCountryChange(event: any) {
    this.selectedCountry = event.target.value;
    this.selectedCountryChange.emit(this.selectedCountry); // Émettre le changement à l'extérieur
  }


}
