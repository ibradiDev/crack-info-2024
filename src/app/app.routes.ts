import { Routes } from '@angular/router';
import { CrackFormComponent } from './crack-form/crack-form.component';
import { DataTableComponent } from './components/data-table/data-table.component';

export const routes: Routes = [
  { path: '', component: CrackFormComponent },
  { path: 'enregistrements', component: DataTableComponent }
];
