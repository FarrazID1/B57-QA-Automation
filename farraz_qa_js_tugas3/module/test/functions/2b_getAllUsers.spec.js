import request from 'supertest';
import { baseUrl } from '../../data/configData.js';

export async function getAllUsers(accessToken, refreshToken) {
  //content of request body
  const response = await request(baseUrl)
    .get('/users')
    .set('Authorization', `Bearer ${accessToken}`);

  return response;
}
