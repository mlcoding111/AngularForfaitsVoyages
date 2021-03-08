import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Forfait } from '../Forfait';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  newForfait: Forfait;
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

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
      hotel: null,

    };
    console.log('This', this.newForfait)
  }
}


@Component({
  selector: 'form-dialog.component-dialog',
  templateUrl: 'form-dialog.component-dialog.html',
})
export class DialogElementsExampleDialog {}