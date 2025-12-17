import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from '../models/asset';

@Injectable({ providedIn: 'root' })
export class AssetService {
  private baseUrl = 'http://localhost:3000/api/assets';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Asset[]>(this.baseUrl);
  }

  get(id: string) {
    return this.http.get<Asset>(`${this.baseUrl}/${id}`);
  }

  create(asset: Asset) {
    return this.http.post<Asset>(this.baseUrl, asset);
  }

  update(id: string, asset: Asset) {
    return this.http.put<Asset>(`${this.baseUrl}/${id}`, asset);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
