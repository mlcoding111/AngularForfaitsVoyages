import { Component, OnInit } from '@angular/core';
// import { FORFAITS } from '../mock-forfaits';
import { Hotel } from '../Hotel';
import { Forfait } from '../Forfait';

import { ForfaitsService } from '../forfaits.service';
import { MatTable } from '@angular/material/table'; // Permet de mettre à jour les données du tableau
import { NgForm } from '@angular/forms'; // Permet de vérifier si le formulaire est valide

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
})
export class GestionComponent implements OnInit {  
  Forfaits: Forfait[];
  newForfait: Forfait;
  selectedForfait: Forfait;
  forfaitsPrix: any = [];
  moyennePrix: any = [];

  // Données du graphiques de réservation
  public reservationGraphique = {
    type : 'bar',
    legende : true,
    options : { responsive: true, maintainAspectRatio: false }
  };

  public reservationsDonnees = {
    etiquettes : ['2015', '2016', '2017', '2019', '2020', '2021'],
    data : [
      { data: [100, 170, 190, 215, 220, 280], label: 'Réservation' },
    ]
  };

// Données du graphique pour les prix
  public prixGraphique = {
    type : 'line',
    legende : true,
    options : { responsive: true, maintainAspectRatio: false }
  };

  public prixDonnees = {
    etiquettes : ['2015', '2016', '2017', '2019', '2020', '2021'],
    data : [
      { data: [100, 170, 190, 215, 220, 280], label: 'Prix' },
      { data: [500, 2000], label: 'Moyenne' },
    ]
  };

  // Columns pour le tableau
  columnsToDisplay = [
    'destination',
    'dateDepart',
    'dateRetour',
    'prix',
    'action',
  ];

  constructor(private forfaitsService: ForfaitsService) {}
  ngOnInit(): void {

    this.newForfait = {
      _id: null,
      destination: '',
      villeDepart: '',
      srcImage: '',
      dateDepart: '',
      dateRetour: '',
      prix: null,
      rabais: null,
      vedette: null,
      hotel: {nom: '', coordonnees: '', nombreEtoiles: 0, nombreChambres: null, caracteristiques: []},
    };
    this.getForfaits(); 
  }

  caracteristiquesChecked(e){
    // On enlve si la caracteristiques est présente
    if(this.newForfait.hotel.caracteristiques.includes(e.target.innerText)){
      this.newForfait.hotel.caracteristiques.indexOf(e.target.innerText) > -1 ? this.newForfait.hotel.caracteristiques.splice(this.newForfait.hotel.caracteristiques.indexOf(e.target.innerText), 1) : false
    }else{
      this.newForfait.hotel.caracteristiques.push(e.target.innerText) // on ajoute si la caracteristiques était pas présente
    }

  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
    console.log(this.selectedForfait);
  }

  onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
      this.forfaitsService.addForfait(this.newForfait).subscribe((forfait) => {
        this.Forfaits.push(forfait);
        forfaitFormAjout.resetForm();
        tableForfaits.renderRows();
      });
    }
  }

  onEdit(forfaitFormEdition: NgForm): void {
    if (forfaitFormEdition.valid) {
      this.forfaitsService
        .updateForfait(this.selectedForfait)
        .subscribe(() => (this.selectedForfait = null));
    }
  }

  onDelete(forfait: Forfait): void {
    this.forfaitsService
      .deleteForfait(forfait._id)
      .subscribe(
        (result) => (this.Forfaits = this.Forfaits.filter((h) => h !== forfait))
      );
  }
// On récupère les forfaits
  getForfaits(): void {
    let moyenne = 0;
    this.forfaitsService
      .getForfaits()
      .subscribe(resultat => { 
        this.Forfaits = resultat;
        resultat.map((index,i) => {         // On ajoute le prix des forfaits dans un tableau pour faire une moyenne dans le graphique
          this.forfaitsPrix.push(index.prix);
        }) 
        this.prixDonnees.data[0].data = this.forfaitsPrix;  // On règle la variable des données pour le graphique au prix de tous les forfaits
        // On fait une moyenne des prix pour l'afficher par la suite
        this.forfaitsPrix.map((index,i) =>{
          moyenne += index;
       })
       moyenne /= this.forfaitsPrix.length; // On fait le calcule pour avoir la moyenne
       this.forfaitsPrix.forEach(prix => this.moyennePrix.push(moyenne)) // On ajoute le nombres au tableau de données 
       this.prixDonnees.data[1].data = this.moyennePrix;
      });
  }

}
