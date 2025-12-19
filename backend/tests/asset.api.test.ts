import request from 'supertest';


const API_URL = 'http://localhost:3000';

describe('Asset API (Integration Tests)', () => {

  let createdAssetId: string;

  it('should create a new asset', async () => {
    const res = await request(API_URL)
      .post('/api/assets')
      .send({
        name: 'Test Laptop',
        type: 'Laptop',
        serialNumber: 'TEST-123',
        status: 'available'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Laptop');
    createdAssetId = res.body._id;
  });

  it('should return all assets', async () => {
    const res = await request(API_URL)
      .get('/api/assets');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return one asset by id', async () => {
    const res = await request(API_URL)
      .get(`/api/assets/${createdAssetId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(createdAssetId);
  });

  it('should update an asset', async () => {
    const res = await request(API_URL)
      .put(`/api/assets/${createdAssetId}`)
      .send({ status: 'repair' });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('repair');
  });

  it('should delete an asset', async () => {
    const res = await request(API_URL)
      .delete(`/api/assets/${createdAssetId}`);

    expect(res.statusCode).toBe(200);
  });

});
