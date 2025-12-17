export interface Asset {
  _id?: string;
  name: string;
  type: string;
  serialNumber: string;
  status: 'available' | 'assigned' | 'repair' | 'retired';
}
