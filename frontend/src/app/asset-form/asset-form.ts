import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../services/asset.service';

@Component({
  standalone: true,
  selector: 'app-asset-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './asset-form.html',
  styleUrls: ['./asset-form.css']
})
export class AssetFormComponent implements OnInit {

  form!: FormGroup;
  isEdit = false;
  assetId?: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private assetService: AssetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      serialNumber: ['', Validators.required],
      status: ['available', Validators.required],
      assignedTo: [''],
      location: [''],
      notes: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdit = true;
      this.assetId = id;

      this.assetService.get(id).subscribe(asset => {
        this.form.patchValue(asset); // 🔥 DAS ist der entscheidende Punkt
      });
    }
  }

  save(): void {
    if (this.form.invalid) {
      alert('Bitte alle Pflichtfelder ausfüllen');
      return;
    }

    if (this.isEdit && this.assetId) {
      this.assetService.update(this.assetId, this.form.value).subscribe(() => {
        this.router.navigate(['/assets', this.assetId]);
      });
    } else {
      this.assetService.create(this.form.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(this.isEdit ? ['/assets', this.assetId] : ['/']);
  }
}
