import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import { FORFAITS } from '../mock-forfaits'

import { Forfait } from '../Forfait';
import { ForfaitsService } from '../forfaits.service';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {

  // Donnée mock ->
  // forfaits: Object[] = FORFAITS;

  @Output() refreshForfaits = new EventEmitter();

  // Données de l'api
  // CHANGER DE FORFAIT POUR LE PROPS VENANT DE SIDE-NAV
  // forfaits: Forfait[]
  @Input() forfaits;
  
  @Input() newForfaits;
  @Input() forfaitsFilter;
  @Input() filteredForfaits;

  @Input() nombreEtoiles: Number
  constructor(private forfaitsService: ForfaitsService) { }

  getForfaits(): void {
    this.forfaitsService
      .getForfaits()
      .subscribe((resultat) => (this.forfaits = resultat));
      // .subscribe((resultat) => (this.forfaits = resultat.filter(elem => elem.destination === this.forfaitsFilter.destination)));
  }
  refreshForfaitsList(){
    this.refreshForfaits.emit(this.test())
  }

// Button debug a coter des forfaits complets
  test(){    
    // console.log(this.newForfaits)
    // console.log(this.forfaits)
    // console.log('Big filter',  this.filteredForfaits)    
    // this.forfaits = this.filteredForfaits;
  }
  ngOnInit(): void {    
  }

}
