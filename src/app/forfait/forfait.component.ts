import { Component, Input, OnInit } from '@angular/core';
// import { FORFAITS } from '../mock-forfaits'
@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {
  @Input() forfait;

  duree: number;
  constructor() { }

  ngOnInit(): void {
    // On calcule la différence entre la date de départ et la date de retour.
    var date1 = new Date(this.forfait.dateDepart.split('-').join('/')); 
    var date2 = new Date(this.forfait.dateRetour.split('-').join('/'));       
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

    this.duree = Difference_In_Days;
  }

}
