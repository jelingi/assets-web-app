import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-asset-form',
  imports: [CommonModule, RouterModule],
  templateUrl: './asset-form.html',
  styleUrls: ['./asset-form.css']
})
export class AssetFormComponent {}
