import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AssetService } from '../services/asset.service';
import { Asset, ASSET_STATUS_LABELS } from '../models/asset';

@Component({
  standalone: true,
  selector: 'app-asset-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './asset-detail.html',
  styleUrls: ['./asset-detail.css']
})
export class AssetDetailComponent {

  asset$: Observable<Asset>;
  statusLabels = ASSET_STATUS_LABELS;

  constructor(
    private route: ActivatedRoute,
    private assetService: AssetService,
    private router: Router
  ) {
    this.asset$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')!;
        return this.assetService.get(id);
      })
    );
  }

  deleteAsset(id?: string): void {
  if (!id) {
    alert('Asset-ID fehlt');
    return;
  }

  const confirmed = confirm('Möchtest du dieses Asset wirklich löschen?');

  if (!confirmed) {
    return;
  }

  this.assetService.delete(id).subscribe(() => {
    this.router.navigate(['/assets']);
  });
}
}
