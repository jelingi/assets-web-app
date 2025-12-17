import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssetService } from '../services/asset.service';
import { Asset } from '../models/asset';

@Component({
  standalone: true,
  selector: 'app-asset-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './asset-list.html',
  styleUrls: ['./asset-list.css']
})
export class AssetListComponent implements OnInit {
  assets: Asset[] = [];

  constructor(private assetService: AssetService) {}

  ngOnInit(): void {
    this.assetService.list().subscribe({
      next: (data) => this.assets = data,
      error: () => alert('Fehler beim Laden der Assets')
    });
  }
}
