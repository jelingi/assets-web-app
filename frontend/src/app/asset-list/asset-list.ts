import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AssetService } from '../services/asset.service';
import { Asset } from '../models/asset';
import { ASSET_STATUS_LABELS } from '../models/asset';
import { Router } from '@angular/router';
@Component({
  
  standalone: true,
  selector: 'app-asset-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './asset-list.html',
    styleUrls: ['./asset-list.css']
})
export class AssetListComponent {
  public assets: Asset[] = [];
   assets$: Observable<Asset[]>;
  statusLabels = ASSET_STATUS_LABELS;

  constructor(private assetService: AssetService,private router: Router) {
    this.assets$ = this.assetService.list();
    
  }
  openDetails(id?: string) {
  if (!id) return;
  this.router.navigate(['/assets', id]);
}
}
