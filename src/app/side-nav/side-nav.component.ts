import { Component, Input, OnInit } from '@angular/core';
// import { FORFAITS } from '../mock-forfaits'
import { Forfait } from '../Forfait';
import { ForfaitFilter } from '../ForfaitFilter';
import { ForfaitsService } from '../forfaits.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  opened = false;
  nombreEtoiles = 5;

  filterEnabled = false;
  @Input() filteredForfaits;
  @Input() newForfaits: Forfait[];
  @Input() forfaits: Forfait[];
  // Cette objet est les informations qui seront remplis dans le formulaire

  // Valeur par default
  @Input() forfaitsFilter: Object = {
    destination: 'Cuba',
    villeDepart: 'Montreal',
    hotel: {
      coordonnees: '...',
      nom: 'Hotel #8',
      nombreChambres: 300,
      nombreEtoiles: 3,
    },
    dateDepart: '2021-01-01',
    dateRetour: '2021-01-08',
  };

  // Event quand on submit les informations du formulaire
  receivedFilteredForfaits(event) {
    // Règle la liste des forfaits a l'objet (event) qui est la liste de forfaits qui "match" avec le formulaire
    this.filteredForfaits = event;
    this.newForfaits = event;
    // this.forfaits = event;
    console.log(
      'Forfait change applied , event: ',
      event,
      this.forfaits,
      this.filteredForfaits
    );
  }

  constructor(private forfaitsService: ForfaitsService) {}

  greet(value: Number) {
    alert('Yo michael' + value);
  }

  getForfaits(): void {
    this.forfaitsService
      .getForfaits()
      .subscribe(
        (resultat) => (
          (this.forfaits = resultat), (this.newForfaits = resultat)
        )
      );
  }

  test() {
    // console.log('Sili', this.newForfaits)
    // this.forfaits = this.filteredForfaits;
    // this.newForfaits = this.filteredForfaits;
    // console.log('Fofait: ' , this.forfaits)
    // console.log("FILTERED FORFAITS : " , this.filteredForfaits)
  }

  ngOnInit(): void {
    this.getForfaits();
  }
}
