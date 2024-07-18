import request from 'supertest';
import { baseUrl } from '../../data/configData.js';

export async function createUnit(accessToken, refreshToken) {
  //content of request body
  const payload = {
    name: 'Unit 1',
    description: 'This is unit 1',
  };

  //send request
  const response = await request(baseUrl)
    .post('/units') //endpoint
    .send(payload) //request body
    .set('Authorization', `Bearer ${accessToken}`); //header

  return response;
}
