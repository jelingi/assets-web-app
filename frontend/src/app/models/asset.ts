export interface AssetHistoryEntry {
  at: string;
  action: string;
  changes: {
    field: string;
    oldValue: any;
    newValue: any;
  }[];
}
export interface Asset {
  _id?: string;
  name: string;
  type: string;
  serialNumber: string;
  status: 'available' | 'assigned' | 'repair' | 'retired';
  assignedTo?: string;
  location?: string;
  notes?: string;
  history?: AssetHistoryEntry[];
}
export const ASSET_STATUS_LABELS: Record<string, string> = {
  available: 'Verfügbar',
  assigned: 'Zugewiesen',
  repair: 'In Reparatur',
  retired: 'Ausgemustert'
};
