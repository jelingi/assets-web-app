import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-asset-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './asset-detail.html',
  styleUrls: ['./asset-detail.css']
})
export class AssetDetailComponent {}
