import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ForumulaireForfaitComponent } from './forumulaire-forfait/forumulaire-forfait.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NbEtoilePipe } from './nb-etoile.pipe';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { GestionComponent } from './gestion/gestion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ForfaitsService } from './forfaits.service';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { IsVedettePipe } from './is-vedette.pipe';
import { DatePipe } from '@angular/common';
import { RemoveDuplicatePipe } from './remove-duplicate.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';

const material = [
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  FormsModule,
  MatInputModule,
  MatDatepickerModule,
  MatSidenavModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
  MatAutocompleteModule,
  MatTableModule,
  MatDialogModule,
  MatTableModule,
  MatTabsModule,
  ChartsModule
];

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    ForfaitCompletComponent,
    ForumulaireForfaitComponent,
    SideNavComponent,
    NbEtoilePipe,
    EtoilesComponent,
    GestionComponent,
    FormDialogComponent,
    IsVedettePipe,
    RemoveDuplicatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [MatDatepickerModule, ForfaitsService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
