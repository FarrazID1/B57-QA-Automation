import request from 'supertest';
import { baseUrl } from '../../data/configData.js';

export async function getAllUnits(accessToken, refreshToken) {
  //content of request body
  const response = await request(baseUrl)
    .get('/units')
    .set('Authorization', `Bearer ${accessToken}`);

  return response;
}
