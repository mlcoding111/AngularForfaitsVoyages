import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forumulaire-forfait',
  templateUrl: './forumulaire-forfait.component.html',
  styleUrls: ['./forumulaire-forfait.component.css'],
})
export class ForumulaireForfaitComponent implements OnInit {
  @Input() nombreEtoiles: Number;
  @Output() greetEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();
  @Input() forfaits;
  @Output() filteredForfaits = new EventEmitter();
  @Input() forfaitsFilter;
  @Input() newForfaits;

  resetClicked = false;
  value = 3;
  fileredProperty = {
    destination: [],
    villeDepart: [],
    hotelNom: [],
  };
  constructor() {}

  onSubmit() {
    this.sendForfaits();
  }

  changeStarValue(e) {
    this.forfaitsFilter.hotel.nombreEtoiles = e.value;
    console.log(e.value);
  }

  // Choisir un thème
  changeTheme(e) {
    e.preventDefault();
    //Ne fonctionne pas .. a voir
    this.filteredForfaits.emit(
      this.forfaits.filter((forfait) => {
        if (forfait.destination == e.target.innerHTML) {
          return true;
        } else {
          console.log('aucun resultat');
        }
      })
    );
  }

  // Fonction qui éxecute quand l'utlisateur "submit"
  sendForfaits() {
    console.log('Le forfait', this.forfaits);
    console.log('Filter: ', this.forfaitsFilter);
    // this.filteredForfaits.emit(this.forfaits.slice(0, -1))
    // C'est ici qu'on filtre les forfaits, ensuite on envoie la variable au composant parent
    if (this.resetClicked) {
      this.filteredForfaits.emit(this.forfaits);
      console.log('emmite new', this.newForfaits);
      this.resetClicked = false;
    } else {
      this.filteredForfaits.emit(
        this.forfaits.filter((forfait) => {
          if (
            forfait.destination === this.forfaitsFilter.destination &&
            forfait.villeDepart === this.forfaitsFilter.villeDepart &&
            forfait.dateDepart === this.forfaitsFilter.dateDepart &&
            forfait.dateRetour === this.forfaitsFilter.dateRetour &&
            forfait.hotel.nom === this.forfaitsFilter.hotel.nom &&
            forfait.hotel.coordonnees === this.forfaitsFilter.hotel.coordonnees &&
            forfait.hotel.nombreChambres === this.forfaitsFilter.hotel.nombreChambres &&
            forfait.hotel.nombreEtoiles === this.forfaitsFilter.hotel.nombreEtoiles &&
            forfait.dateRetour === this.forfaitsFilter.dateRetour &&
            forfait.dateDepart === this.forfaitsFilter.dateDepart &&
            forfait.hotel.caracteristiques === this.forfaitsFilter.hotel.caracteristiques
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
      // console.log('emmite law', this.newForfaits);
    }
    // console.log(this.forfaitsFilter);
    // console.log('sending filtered forfaits forfaits');
  }

  resetForfaits() {
    console.log('reset forfait');
  }

  ngOnInit() {}

  resetClick($event) {
    $event.preventDefault();
    this.resetClicked = true;
    this.sendForfaits();
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate() + 1),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  convertDateRetour(event) {
    this.forfaitsFilter.dateRetour = this.formatDate(event);
  }
  convertDateDepart(event) {
    // var todayDate = event.toISOString().slice(0,10);
    // console.log(todayDate)
    // this.forfaitsFilter.dateDepart = todayDate;
    this.forfaitsFilter.dateDepart = this.formatDate(event);
  }

  // S'assurer que dans le mat autocomplete les valeurs s'affichent pas 2 fois . Donc on crée une variables et on filtre les doubles pour ensuites les affichers.
  setFilteredProperty() {
    this.forfaits.forEach((element, index) => {
      !this.fileredProperty.destination.includes(element.destination) &&
        this.fileredProperty.destination.push(element.destination);
      !this.fileredProperty.villeDepart.includes(element.villeDepart) &&
        this.fileredProperty.villeDepart.push(element.villeDepart);
      !this.fileredProperty.hotelNom.includes(element.hotel.nom) &&
        this.fileredProperty.hotelNom.push(element.hotel.nom);
    });
    // console.log(this.fileredProperty);
  }

  callParentGreet() {
    this.greetEvent.emit(this.value);
  }
}
