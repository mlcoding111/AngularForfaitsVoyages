import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  @Input() forfait;
  @Input() forfaitsFilter;
  constructor() { 
  }

  ngOnInit(): void {
    // console.log('Filter from complet : ' , this.forfaitsFilter)
    // console.log('Filter from completssss : ' , this.forfait)
  }

}
