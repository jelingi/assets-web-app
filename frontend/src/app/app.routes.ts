import { Routes } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list';
import { AssetDetailComponent } from './asset-detail/asset-detail';
import { AssetFormComponent } from './asset-form/asset-form';

export const routes: Routes = [
  { path: '', component: AssetListComponent },
  { path: 'assets/new', component: AssetFormComponent },
  { path: 'assets/:id', component: AssetDetailComponent },
  { path: 'assets/:id/edit', component: AssetFormComponent }
];

